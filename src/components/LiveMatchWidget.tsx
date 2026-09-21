import { ClipboardList } from "lucide-react";
import useLiveMatchWidget from "../hooks/useLiveMatchWidget";
import type { TeamStats } from "../types";
import SmallLoader from "./SmallLoader";
import useRequiredContext from "../hooks/useRequiredContext";
import { DataContext } from "../contexts/DataContext";
import { defineMatchStatus } from "../helpers/defineStatus";

type Stats = Record<string, string | number>;

interface WidgetType {
  label: string;
  key: string;
}

function WidgetLayout({ awayTeam, homeTeam, homeStats, awayStats, WIDGET_STATS, score, time }: { awayTeam: TeamStats; homeTeam: TeamStats; homeStats: Stats; awayStats: Stats; WIDGET_STATS: WidgetType[]; score: string; time: string; }) {
  return (
    <>
      <div className="text-center mb-3">
        <h3 className="text-sm font-bold text-fg tracking-tight">Live Match</h3>
        <span className="text-emerald-500 text-xs font-semibold">{time}</span>
      </div>

      <div className="flex w-full justify-evenly items-center mb-5">
        <img className="w-11.25 h-11.25" src={homeTeam.team.logo} alt={homeTeam.team.name} />
        <div className="bg-accent/10 text-accent text-sm md:text-base font-bold px-6 py-1.5 rounded-full tracking-wider">
          {score}
        </div>
        <img className="w-11.25 h-11.25" src={awayTeam.team.logo} alt={awayTeam.team.name} />
      </div>

      <div className="w-full flex flex-col gap-4">
        {WIDGET_STATS.map((item) => {
          const homeVal = Number(homeStats[item.key]) || 0;
          const awayVal = Number(awayStats[item.key]) || 0;

          const maxVal = Math.max(homeVal, awayVal, 1);
          const homeFillPct = (homeVal / maxVal) * 100;
          const awayFillPct = (awayVal / maxVal) * 100;

          return (
            <div key={item.label} className="flex flex-col items-center w-full">
              <span className="text-[11px] font-semibold text-fg mb-1.5">
                {item.label}
              </span>

              <div className="w-full flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-stat-home w-5 text-left">
                  {homeVal}
                </span>

                <div className="flex-1 flex items-center gap-1">
                  
                  <div className="flex-1 h-1.5 rounded-full bg-track overflow-hidden flex justify-end">
                    <div
                      className="bg-stat-home h-full rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${homeFillPct}%` }}
                    />
                  </div>

                  
                  <div className="flex-1 h-1.5 rounded-full bg-track overflow-hidden flex justify-start">
                    <div
                      className="bg-stat-away h-full rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${awayFillPct}%` }}
                    />
                  </div>
                </div>

                <span className="text-xs font-bold text-stat-away w-5 text-right">
                  {awayVal}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function LiveMatchWidget() {
  const { homeStats, awayStats, WIDGET_STATS, homeTeam, awayTeam, isDataReal, isLoadingDetails, isInitialMock } = useLiveMatchWidget();
  const { activeMatch } = useRequiredContext(DataContext);

  if (isLoadingDetails) {
    return <SmallLoader />
  }

  if (!isDataReal || (!activeMatch && !isInitialMock)) return (
    <div className="w-full max-w-[419.2px] lg:grow lg:basis-0 flex flex-col items-center justify-center min-h-105 bg-live-widget-bg rounded-3xl border border-live-widget-border shadow-sm p-6 text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-surface-2 rounded-full">
        <ClipboardList className="w-8 h-8 text-muted stroke-[1.5]" />
      </div>

      <h3 className="text-[17px] font-bold text-fg mb-2">
        No Detailed Statistics
      </h3>

      <p className="text-sm text-muted max-w-65 leading-relaxed">
        Detailed stats are unavailable for this fixture. Please try selecting another match from the list.
      </p>
    </div>
  );

  let score = "2 - 1";
  let time = "FT";

  if (!isInitialMock && activeMatch) {
    const matchStatus = defineMatchStatus(activeMatch);
    score = `${activeMatch.goals.home ?? 0} - ${activeMatch.goals.away ?? 0}`;
    time = matchStatus.isLive ? `${matchStatus.status}'` : matchStatus.status;
  }

  return (
    <div id="liveWidget" className="w-full max-w-[419.2px] lg:grow lg:basis-0 bg-live-widget-bg rounded-3xl shadow-sm border border-live-widget-border flex flex-col items-center justify-center p-2.5 min-h-105">
      <WidgetLayout
        awayTeam={awayTeam}
        WIDGET_STATS={WIDGET_STATS}
        awayStats={awayStats}
        homeTeam={homeTeam}
        homeStats={homeStats}
        score={score}
        time={time}
      />
    </div>
  );
}