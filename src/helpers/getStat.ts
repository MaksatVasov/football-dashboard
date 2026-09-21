type StatLike = { type: string; value: number | string | null };

export const getStat = (stats: StatLike[], type: string): number => {
    const value = stats.find((s) => s.type === type)?.value ?? 0;
    return typeof value === "string" ? parseInt(value) || 0 : value;
};