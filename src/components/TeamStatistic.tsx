import type { FixtureDetails } from "../types";
import { getStat } from "../helpers/getStat";

const ROWS = [
    { label: "Pass", type: "Total passes" },
    { label: "Shoot", type: "Total Shots" },
    { label: "Shoot on Target", type: "Shots on Goal" },
    { label: "Ball Possession", type: "Ball Possession", suffix: "%" },
    { label: "Red Card", type: "Red Cards" },
    { label: "Yellow Card", type: "Yellow Cards" },
    { label: "Offside", type: "Offsides" },
    { label: "Corners", type: "Corner Kicks" },
];

export default function TeamStatistic({ match }: { match: FixtureDetails }) {
    const all = match.statistics ?? [];
    const homeStats = all.find((s) => s.team.id === match.teams.home.id)?.statistics ?? [];
    const awayStats = all.find((s) => s.team.id === match.teams.away.id)?.statistics ?? [];

    if (homeStats.length === 0 && awayStats.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-6 w-full border border-gray-100 shadow-sm text-center text-gray-500">
                Statistics are not available for this match
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-6 w-full border border-gray-100 shadow-sm">
            <h2 className="text-center font-bold text-gray-900 mb-6">Team Statistic</h2>

            <div className="flex flex-col gap-5">
                {ROWS.map(({ label, type, suffix = "" }) => {
                    const home = getStat(homeStats, type);
                    const away = getStat(awayStats, type);
                    const total = home + away;

                    return (
                        <div key={label}>
                            <p className="text-center text-sm text-gray-500 mb-2">{label}</p>
                            <div className="flex items-center gap-3">
                                <span className="w-12 font-bold text-gray-900">{home}{suffix}</span>
                                <div className="flex flex-1 h-1.5 gap-0.5 rounded-full overflow-hidden bg-gray-100">
                                    {total > 0 && (
                                        <>
                                            <div className="bg-green-500" style={{ width: `${(home / total) * 100}%` }} />
                                            <div className="bg-[#7F1D1D] flex-1" />
                                        </>
                                    )}
                                </div>
                                <span className="w-12 text-right font-bold text-gray-900">{away}{suffix}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}