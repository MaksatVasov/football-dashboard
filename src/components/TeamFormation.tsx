import type { FixtureDetails } from "../types";
import { toPitchPositions } from "../helpers/pitchPositions";

type PitchPlayer = ReturnType<typeof toPitchPositions>[number];
type PlayerExtra = { photo: string; rating: string | null };

const POS_LABEL: Record<string, string> = {
  G: "Goalkeeper",
  D: "Defender",
  M: "Midfielder",
  F: "Forward",
};

function PlayerDot({ p, extra, colors, }: { p: PitchPlayer; extra?: PlayerExtra | undefined; colors: string; }) {
  const vertical = p.top < 40 ? "top-full mt-2" : "bottom-full mb-2";
  const horizontal =
    p.left < 12 ? "left-0" : p.left > 88 ? "right-0" : "left-1/2 -translate-x-1/2";
  const rating = extra?.rating ? Number(extra.rating) : NaN;

  return (
    <div
      tabIndex={0}
      className={`group absolute w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold -translate-x-1/2 -translate-y-1/2 shadow-lg cursor-pointer outline-none hover:z-30 focus:z-30 ${colors}`}
      style={{ top: `${p.top}%`, left: `${p.left}%` }}
    >
      {p.number}

      <span
        className={`pointer-events-none invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 transition-opacity absolute z-30 flex w-max max-w-56 items-center gap-2 rounded-xl border border-line bg-surface p-2 text-left shadow-xl ${vertical} ${horizontal}`}
      >
        {extra?.photo && (
          <img
            src={extra.photo}
            alt=""
            className="h-10 w-10 shrink-0 rounded-full bg-surface-2 object-cover"
          />
        )}
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-xs font-bold text-fg">{p.name}</span>
          <span className="text-[11px] font-normal text-muted">
            #{p.number} · {POS_LABEL[p.pos] ?? p.pos}
          </span>
          {Number.isFinite(rating) && (
            <span className="text-[11px] font-bold text-accent">
              Rating {rating.toFixed(1)}
            </span>
          )}
        </span>
      </span>
    </div>
  );
}

export default function TeamFormation({ match }: { match: FixtureDetails }) {
  const { teams, fixture } = match;
  const home = match.lineups?.find((l) => l.team.id === teams.home.id);
  const away = match.lineups?.find((l) => l.team.id === teams.away.id);

  if (!home || !away) {
    return (
      <div className="bg-surface mt-6 rounded-2xl p-6 w-full border border-line shadow-sm text-center text-muted">
        Formation is not available for this match
      </div>
    );
  }

  const extras = new Map<number, PlayerExtra>();
  match.players?.forEach((t) =>
    t.players.forEach((p) =>
      extras.set(p.player.id, {
        photo: p.player.photo,
        rating: p.statistics[0]?.games.rating ?? null,
      })
    )
  );

  const homePositions = toPitchPositions(home.startXI, "home");
  const awayPositions = toPitchPositions(away.startXI, "away");

  return (
    <div className="bg-surface mt-6 rounded-2xl p-6 w-full border border-line shadow-sm">
      <h2 className="text-fg font-bold text-lg mb-8">Team Formation</h2>

      <div className="flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-3">
          <img src={teams.home.logo} alt={teams.home.name} className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-fg font-bold">{teams.home.name}</span>
            <span className="text-muted text-sm">{home.formation ?? "-"}</span>
          </div>
        </div>
        <span className="text-muted font-bold">{fixture.status.short}</span>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-fg font-bold">{teams.away.name}</span>
            <span className="text-muted text-sm">{away.formation ?? "-"}</span>
          </div>
          <img src={teams.away.logo} alt={teams.away.name} className="w-10 h-10 object-contain" />
        </div>
      </div>

      {/* Пич намеренно оставлен зелёным в обеих темах — это цвет футбольного поля, а не UI */}
      {/* overflow-hidden убран, иначе карточки игроков обрезались бы краем поля */}
      <div className="w-full h-100 bg-[#1a4a1c] border-2 border-white/80 relative rounded-md">
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/80 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white/80 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/80 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        {/* штрафные и вратарские в процентах, чтобы вратарь всегда стоял внутри */}
        <div className="absolute top-1/2 left-0 w-[16%] h-1/2 border-2 border-l-0 border-white/80 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[16%] h-1/2 border-2 border-r-0 border-white/80 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-[6%] h-1/4 border-2 border-l-0 border-white/80 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[6%] h-1/4 border-2 border-r-0 border-white/80 -translate-y-1/2"></div>

        {homePositions.map((p) => (
          <PlayerDot
            key={`home-${p.id}`}
            p={p}
            extra={extras.get(p.id)}
            colors="bg-red-600 text-white"
          />
        ))}

        {awayPositions.map((p) => (
          <PlayerDot
            key={`away-${p.id}`}
            p={p}
            extra={extras.get(p.id)}
            colors="bg-yellow-400 text-black"
          />
        ))}
      </div>
    </div>
  );
}