import type { FixtureDetails, FixtureEvent } from "../types";

const TICKS = [0, 15, 30, 45, 60, 75, 90];

const getMinute = (e: FixtureEvent) => e.time.elapsed + (e.time.extra ?? 0);

const formatMinute = (e: FixtureEvent) =>
  `${e.time.elapsed}'${e.time.extra ? `+${e.time.extra}` : ""}`;

const DETAIL_LABEL: Record<string, string> = {
  "Normal Goal": "Goal",
  Penalty: "Penalty goal",
  "Own Goal": "Own goal",
  "Yellow Card": "Yellow card",
  "Red Card": "Red card",
  "Second Yellow card": "Second yellow card",
};

function TimelineEvent({
  event,
  left,
  top,
  opens,
}: {
  event: FixtureEvent;
  left: number;
  top: string;
  opens: "up" | "down";
}) {
  const isGoal = event.type === "Goal";
  const isRed = event.detail === "Red Card" || event.detail === "Second Yellow card";

  const vertical = opens === "up" ? "bottom-full mb-2" : "top-full mt-2";
  const horizontal =
    left < 15 ? "left-0" : left > 85 ? "right-0" : "left-1/2 -translate-x-1/2";

  return (
    <div
      tabIndex={0}
      className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer outline-none hover:z-30 focus:z-30"
      style={{ left: `${left}%`, top }}
    >
      {isGoal ? (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white border border-gray-200 text-xs shadow-sm">
          ⚽
        </span>
      ) : (
        <span
          className={`block h-4 w-3 rounded-sm shadow-sm ${isRed ? "bg-red-600" : "bg-yellow-400"}`}
        />
      )}

      <span
        className={`pointer-events-none invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 transition-opacity absolute z-30 flex w-max max-w-52 flex-col rounded-xl border border-gray-100 bg-white p-2 text-left shadow-xl ${vertical} ${horizontal}`}
      >
        <span className="text-xs font-bold text-gray-900">
          {event.player.name ?? "Unknown"}
        </span>
        <span className="text-[11px] text-gray-500">
          {formatMinute(event)} · {DETAIL_LABEL[event.detail] ?? event.detail}
        </span>
        {isGoal && event.assist?.name && (
          <span className="text-[11px] text-gray-500">Assist: {event.assist.name}</span>
        )}
      </span>
    </div>
  );
}

export default function GraphicPerformance({ match }: { match: FixtureDetails }) {
  const { teams } = match;

  const events = (match.events ?? []).filter((e) => (e.type === "Goal" && e.detail !== "Missed Penalty") || e.type === "Card"
  );

  const total = Math.max(90, ...events.map(getMinute));

  const renderSide = (teamId: number, top: string, opens: "up" | "down") => events.filter((e) => e.team.id === teamId).map((e, i) => (
    <TimelineEvent
      key={`${teamId}-${i}`}
      event={e}
      left={(getMinute(e) / total) * 100}
      top={top}
      opens={opens}
    />
  ));

  return (
    <div className="bg-white rounded-2xl p-6 w-full border border-gray-100 shadow-sm">
      <h2 className="text-gray-900 font-bold text-lg mb-8">Match Timeline</h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-500 py-16">No events recorded for this match</p>
      ) : (
        <div className="px-4">
          <div className="relative h-56 w-full">
            {TICKS.map((t) => (
              <div
                key={t}
                className="absolute top-0 bottom-6 w-px bg-gray-100"
                style={{ left: `${(t / total) * 100}%` }}
              />
            ))}

            <div className="absolute left-0 right-0 top-[45%] h-0.5 bg-gray-200" />

            {renderSide(teams.home.id, "22%", "up")}
            {renderSide(teams.away.id, "68%", "down")}

            {TICKS.map((t) => (
              <span
                key={t}
                className="absolute bottom-0 -translate-x-1/2 text-xs text-gray-400"
                style={{ left: `${(t / total) * 100}%` }}
              >
                {t}m
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-x-6 gap-y-2 pt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-700 text-sm font-medium">{teams.home.name} (top)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#7F1D1D]"></div>
          <span className="text-gray-700 text-sm font-medium">{teams.away.name} (bottom)</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>⚽ goal</span>
          <span className="block h-3 w-2.5 rounded-sm bg-yellow-400" /> yellow
          <span className="block h-3 w-2.5 rounded-sm bg-red-600" /> red
        </div>
      </div>
    </div>
  );
}