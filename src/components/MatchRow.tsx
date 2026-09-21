import { Info, LineChart } from "lucide-react";
import type { Match } from "../types";
import useRequiredContext from "../hooks/useRequiredContext";
import { DataContext } from "../contexts/DataContext";
import { defineMatchStatus } from "../helpers/defineStatus";
import { Link } from "react-router-dom";



export default function MatchRow({ match }: { match: Match }) {
    const matchStatus = defineMatchStatus(match);
    const matchDate = new Date(match.fixture.date);

    const { setLiveMatchID, setActiveMatch } = useRequiredContext(DataContext);

    return (
        <div
            key={match.fixture.id}
            className="grid my-1 grid-cols-[1fr_auto_1fr] xl:grid-cols-[1.5fr_auto_1.5fr_1.5fr_2fr_auto] items-center gap-y-4 gap-x-2 md:gap-x-4 p-4 md:p-3 bg-surface-2 rounded-2xl hover:bg-surface transition-colors"
        >
            <div className="flex items-center gap-2 md:gap-3">
                <span className="text-2xl shrink-0">
                    <img src={match.teams.home.logo ?? undefined} className="w-6 h-6 md:w-8 md:h-8 object-contain" alt={match.teams.home.name} />
                </span>
                <span className="font-semibold text-xs md:text-sm text-fg truncate">
                    {match.teams.home.name}
                </span>
            </div>

            <div className="bg-accent/10 text-accent px-3 md:px-4 py-1.5 rounded-xl text-xs md:text-sm font-bold min-w-14 text-center justify-self-center">
                {matchStatus.isUpcoming
                    ? (matchStatus.status === "TBD" ? "TBD" : matchDate.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' }))
                    : `${match.goals.home} : ${match.goals.away}`
                }
            </div>

            <div className="flex items-center justify-end gap-2 md:gap-3">
                <span className="font-semibold text-xs md:text-sm text-fg truncate text-right">
                    {match.teams.away.name}
                </span>
                <span className="text-2xl shrink-0">
                    <img src={match.teams.away.logo ?? undefined} className="w-6 h-6 md:w-8 md:h-8 object-contain" alt={match.teams.away.name} />
                </span>
            </div>

            <div className="flex justify-start md:justify-center">
                <span className={`px-2 md:px-3 py-1 rounded-lg text-[14px] font-bold whitespace-nowrap flex items-center ${matchStatus.isCancelled ? 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400' : 'bg-accent/10 text-accent'}`}>
                    {matchStatus.status}
                    {matchStatus.isLive && <span className="animate-blink">'</span>}
                </span>
            </div>

            <div className="text-[11px] md:text-sm text-muted text-center md:text-right md:pr-4 whitespace-nowrap">
                {matchDate.toLocaleDateString("en-GB", { day: '2-digit', month: 'short' })}
            </div>

            <div className="flex items-center justify-end gap-1 md:gap-2 text-muted">
                <button onClick={() => {
                    setLiveMatchID(String(match.fixture.id));
                    setActiveMatch(match);
                    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
                }} className="p-1 md:p-1.5 hover:text-fg transition-colors">
                    <Info className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <Link to={`/match/${match.fixture.id}`} className="p-1 md:p-1.5 hover:text-fg transition-colors">
                    <LineChart className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
            </div>
        </div>
    );
}