import type { FixtureDetails, FixtureEvent } from "../types";

const formatMinute = (e: FixtureEvent) =>
    `${e.time.elapsed}'${e.time.extra ? `+${e.time.extra}` : ""}`;

export default function MatchScoreboard({ match }: { match: FixtureDetails }) {
    const { teams, goals, fixture } = match;

    const goalsOf = (teamId: number) =>
        (match.events ?? []).filter(
            (e) => e.type === "Goal" && e.detail !== "Missed Penalty" && e.team.id === teamId
        );

    const renderGoal = (e: FixtureEvent, i: number) => (
        <span key={i}>
            {e.player.name} {formatMinute(e)}
            {e.detail === "Own Goal" && " (OG)"}
        </span>
    );

    return (
        <div className="relative w-full bg-white border border-gray-100 rounded-2xl overflow-hidden py-8 px-4 md:px-10 flex items-start justify-between shadow-sm">
            <img src={teams.home.logo} alt="" className="absolute -left-16 md:-left-12 top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-[0.04] object-contain pointer-events-none" />
            <img src={teams.away.logo} alt="" className="absolute -right-16 md:-right-12 top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-[0.04] object-contain pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-3 w-1/3">
                <div className="flex items-center gap-3">
                    <img src={teams.home.logo} alt={teams.home.name} className="w-8 h-8 object-contain" />
                    <span className="text-gray-900 text-[15px] md:text-xl font-bold hidden sm:block">{teams.home.name}</span>
                </div>
                <div className="flex flex-col text-[11px] md:text-[13px] text-gray-500 gap-1 mt-2">
                    {goalsOf(teams.home.id).map(renderGoal)}
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-center w-1/3">
                <span className="text-gray-900 font-medium text-[12px] md:text-[13px] mb-3 text-center">
                    {fixture.venue.name ?? "Venue TBC"}
                </span>
                <div className="flex items-center justify-center gap-4 md:gap-6">
                    <span className="text-gray-900 text-3xl md:text-4xl font-bold">{goals.home ?? "-"}</span>
                    <span className="text-gray-400 text-sm font-semibold">{fixture.status.short}</span>
                    <span className="text-gray-900 text-3xl md:text-4xl font-bold">{goals.away ?? "-"}</span>
                </div>
            </div>

            <div className="relative z-10 flex flex-col gap-3 w-1/3 items-end">
                <div className="flex items-center gap-3">
                    <span className="text-gray-900 text-[15px] md:text-xl font-bold hidden sm:block">{teams.away.name}</span>
                    <img src={teams.away.logo} alt={teams.away.name} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex flex-col text-[11px] md:text-[13px] text-gray-500 gap-1 items-end text-right mt-2">
                    {goalsOf(teams.away.id).map(renderGoal)}
                </div>
            </div>
        </div>
    );
}