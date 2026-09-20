import useLiveMatchWidget from "../hooks/useLiveMatchWidget";

export default function LiveMatchWidget() {

  const { homeStats, awayStats, WIDGET_STATS, homeTeam, awayTeam } = useLiveMatchWidget();

  return (
    <div className="w-full lg:grow lg:basis-0 bg-[rgba(0,0,0,0.01)] rounded-3xl shadow-sm border border-gray-100/80 flex flex-col items-center p-2.5">
      <div className="text-center mb-3">
        <h3 className="text-sm font-bold text-gray-900 tracking-tight">Live Match</h3>
        <span className="text-emerald-500 text-xs font-semibold">62 : 24</span>
      </div>

      <div className="flex w-full justify-evenly items-center mb-5">
        <img className="w-11.25 h-11.25" src={homeTeam.team.logo} alt={homeTeam.team.name} />
        <div className="bg-[#F0EDFF] text-[#5942AA] text-sm md:text-base font-bold px-6 py-1.5 rounded-full tracking-wider">
          2 - 2
        </div>
        <img className="w-11.25 h-11.25" src={awayTeam.team.logo} alt={awayTeam.team.name} />
      </div>
      <div className="w-full flex flex-col gap-4">
        {WIDGET_STATS.map((item) => {
          const homeVal = Number(homeStats[item.key]) || 0;
          const awayVal = Number(awayStats[item.key]) || 0;

          const total = homeVal + awayVal || 1;
          const homeWidth = (homeVal / total) * 100;
          const awayWidth = (awayVal / total) * 100;

          return (
            <div key={item.label} className="flex flex-col items-center w-full">
              <span className="text-[11px] font-semibold text-gray-700 mb-1.5">
                {item.label}
              </span>

              <div className="w-full flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-[#5942AA] w-5 text-left">
                  {homeVal}
                </span>

                <div className="flex-1 flex gap-1 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#5942AA] h-full transition-all duration-500 ease-out rounded-l-full"
                    style={{ width: `${homeWidth}%` }}
                  />
                  <div
                    className="bg-[#5C161D] h-full transition-all duration-500 ease-out rounded-r-full"
                    style={{ width: `${awayWidth}%` }}
                  />
                </div>

                <span className="text-xs font-bold text-[#5C161D] w-5 text-right">
                  {awayVal}
                </span>
              </div>
            </div>
          );
        })}


      </div>
    </div>
  );
}