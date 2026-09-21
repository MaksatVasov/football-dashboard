import type { LineupPlayer } from "../types";

export function toPitchPositions(players: { player: LineupPlayer }[], side: "home" | "away") {
    const parsed = players
        .map(({ player }) => {
            if (!player.grid) return null;
            const [row, col] = player.grid.split(":").map(Number);
            return { ...player, row, col };
        })
        .filter((p): p is NonNullable<typeof p> => p !== null);

    if (parsed.length === 0) return [];

    const maxRow = Math.max(...parsed.map((p) => p.row));

    return parsed.map((p) => {
        const inRow = parsed.filter((x) => x.row === p.row).length;

        
        const homeLeft =
            p.row === 1 ? 4 : 18 + (maxRow > 2 ? (p.row - 2) / (maxRow - 2) : 0) * 28;
        const left = side === "home" ? homeLeft : 100 - homeLeft;

        const rawTop = (p.col / (inRow + 1)) * 100;
        const top = side === "home" ? rawTop : 100 - rawTop;

        return { ...p, left, top };
    });
}