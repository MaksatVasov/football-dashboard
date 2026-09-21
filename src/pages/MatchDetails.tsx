import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { FixtureDetails } from "../types";
import Loader from "../components/Loader";
import ErrorState, { type LoadError } from "../components/ErrorState";
import MatchScoreboard from "../components/MatchScoreBoard";
import MotmSection from "../components/MotmSection";
import GraphicPerformance from "../components/GraphicPerformance";
import TeamFormation from "../components/TeamFormation";
import TeamStatistic from "../components/TeamStatistic";
import TeamLineUp from "../components/TeamLineUp";

const toLoadError = (e: unknown): LoadError =>
    e instanceof Error && (e.message === "rate-limit" || e.message === "not-found")
        ? e.message
        : "generic";

export default function MatchDetails() {
    const { id } = useParams();

    const [match, setMatch] = useState<FixtureDetails | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<LoadError | null>(null);
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        if (!id) return;

        const cacheKey = `fixture_${id}`;
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            setMatch(JSON.parse(cached));
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        setLoading(true);
        setError(null);

        const getMatch = async () => {
            try {
                const request = await fetch(`https://v3.football.api-sports.io/fixtures?id=${id}`, {
                    headers: { "x-apisports-key": import.meta.env["VITE_FOOTBALL_API_KEY"] },
                    signal: controller.signal,
                });

                if (request.status === 429) throw new Error("rate-limit");
                if (!request.ok) throw new Error("generic");

                const json = await request.json();

                if (json.errors && Object.keys(json.errors).length > 0) {
                    throw new Error("rate-limit");
                }

                const fixture: FixtureDetails | undefined = json.response?.[0];
                if (!fixture) throw new Error("not-found");

                if (fixture.fixture.status.short === "FT") {
                    localStorage.setItem(cacheKey, JSON.stringify(fixture));
                }
                setMatch(fixture);
            } catch (e) {
                if (e instanceof Error && e.name === "AbortError") return;
                setError(toLoadError(e));
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        };

        getMatch();
        return () => controller.abort();
    }, [id, attempt]);

    if (isLoading) return <Loader />;
    if (error || !match) {
        return <ErrorState kind={error ?? "generic"} onRetry={() => setAttempt((a) => a + 1)} />;
    }

    return (
        <main className="max-w-full mt-1.5 mx-auto p-5 lg:max-w-[100rem] bg-page">
            <MatchScoreboard match={match} />

            <MotmSection match={match} />

            <section className="flex flex-col gap-6 md:flex-row">
                <GraphicPerformance match={match} />
                <TeamStatistic match={match} />
            </section>

            <div className="flex flex-col gap-5 w-full overflow-hidden">
                <TeamFormation match={match} />
                <TeamLineUp match={match} />
            </div>
        </main>
    );
}