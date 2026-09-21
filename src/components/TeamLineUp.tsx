import type { FixtureDetails } from "../types";

const POS_LABEL: Record<string, string> = { G: "GK", D: "DF", M: "MF", F: "FW" };

export default function TeamLineUp({ match }: { match: FixtureDetails }) {
    const home = match.lineups?.find((l) => l.team.id === match.teams.home.id);
    const away = match.lineups?.find((l) => l.team.id === match.teams.away.id);

    if (!home || !away) {
        return (
            <div className="bg-white rounded-2xl p-6 w-full mt-4 border border-gray-100 shadow-sm text-center text-gray-500">
                Line ups are not available for this match
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-6 w-full mt-4 border border-gray-100 shadow-sm">
            <h2 className="text-gray-900 font-bold mb-6">Line Ups</h2>

            <div className="flex justify-between">
                <div className="flex flex-col gap-3 pr-4">
                    {home.startXI.map(({ player }) => (
                        <div key={player.id} className="flex gap-2 items-center text-[13px]">
                            <span className="text-green-600 font-bold w-5">{POS_LABEL[player.pos] ?? player.pos}</span>
                            <span className="text-gray-400 w-5">{player.number}</span>
                            <span className="text-gray-700 truncate">{player.name}</span>
                        </div>
                    ))}
                </div>

                <div className="w-px bg-gray-200 self-stretch" />

                <div className="flex flex-col gap-3 pl-2">
                    {away.startXI.map(({ player }) => (
                        <div key={player.id} className="flex justify-end gap-2 items-center text-[13px]">
                            <span className="text-gray-700 truncate text-right">{player.name}</span>
                            <span className="text-gray-400 w-5 text-right">{player.number}</span>
                            <span className="text-[#7F1D1D] font-bold w-5 text-right">{POS_LABEL[player.pos] ?? player.pos}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}