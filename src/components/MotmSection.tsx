import type { FixtureDetails } from "../types";

export default function MotmSection({ match }: { match: FixtureDetails }) {
    const candidates = (match.players ?? [])
        .flatMap((t) =>
            t.players.map((p) => ({
                team: t.team,
                player: p.player,
                rating: Number(p.statistics[0]?.games.rating),
            }))
        )
        .filter((c) => Number.isFinite(c.rating) && c.rating > 0);

    if (candidates.length === 0) return null;

    const best = candidates.reduce((a, b) => (b.rating > a.rating ? b : a));

    const title = match.fixture.status.short === "FT" ? "Man of the match" : "Top performer";

    const [first, ...rest] = best.player.name.split(" ");
    const firstName = rest.length > 0 ? first : "";
    const lastName = rest.length > 0 ? rest.join(" ") : first;

    return (
        <div className="relative w-full my-6 rounded-2xl overflow-hidden bg-linear-to-r from-[#4a0416] to-[#7a1b30] text-white flex items-center justify-between gap-6 px-6 md:px-12 py-8 min-h-64">
            <div className="relative z-10 flex flex-col">
                <h2 className="text-3xl md:text-6xl font-extrabold uppercase leading-none tracking-tight">
                    {title}
                </h2>
                <p className="mt-2 text-3xl md:text-6xl font-extrabold uppercase leading-none tracking-tight text-[#F7C948]">
                    {firstName && (
                        <span className="block text-white/90 text-xl md:text-3xl mb-1">{firstName}</span>
                    )}
                    {lastName}
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-white/80">
                    <img src={best.team.logo} alt={best.team.name} className="w-6 h-6 object-contain" />
                    <span>{best.team.name}</span>
                </div>
            </div>

            <div className="relative shrink-0 flex flex-col items-center gap-3">
                <img
                    src={best.team.logo}
                    alt=""
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 object-contain opacity-10 brightness-0 invert pointer-events-none"
                />

                <img
                    src={best.player.photo}
                    alt={best.player.name}
                    className="relative z-10 w-24 h-24 md:w-44 md:h-44 rounded-full object-cover border-4 border-[#F7C948] bg-white/10"
                />
                <span className="relative z-10 px-4 py-1 rounded-full bg-[#F7C948] text-[#4a0416] font-extrabold text-lg">
                    {best.rating.toFixed(1)}
                </span>
            </div>
        </div>
    );
}