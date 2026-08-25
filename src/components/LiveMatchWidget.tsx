export default function LiveMatchWidget() {
  const stats = [
    {
      id: "shotsOnTarget",
      label: "Shoot on Target",
      homeVal: 7,
      awayVal: 3,
      homePercent: 70,
      awayPercent: 30,
    },
    {
      id: "shots",
      label: "Shoot",
      homeVal: 12,
      awayVal: 7,
      homePercent: 63,
      awayPercent: 37,
    },
    {
      id: "fouls",
      label: "Fouls",
      homeVal: 7,
      awayVal: 3,
      homePercent: 70,
      awayPercent: 30,
    },
  ];

  return (
    <div className="w-full lg:grow lg:basis-0 bg-[rgba(0,0,0,0.01)] rounded-3xl shadow-sm border border-gray-100/80 flex flex-col items-center p-2.5">
      <div className="text-center mb-3">
        <h3 className="text-sm font-bold text-gray-900 tracking-tight">Live Match</h3>
        <span className="text-emerald-500 text-xs font-semibold">62 : 24</span>
      </div>

      <div className="bg-[#F0EDFF] text-[#5942AA] text-sm md:text-base font-bold px-6 py-1.5 rounded-full mb-5 tracking-wider">
        2 - 2
      </div>

      <div className="w-full flex flex-col gap-4">
        {stats.map((item) => (
          <div key={item.id} className="flex flex-col items-center w-full">
            <span className="text-[11px] font-semibold text-gray-700 mb-1.5">
              {item.label}
            </span>

            <div className="w-full flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-[#5942AA] w-4 text-left">
                {item.homeVal}
              </span>

              <div className="flex-1 bg-[#EBE5F7] h-1 rounded-full overflow-hidden flex justify-end">
                <div
                  className="bg-[#5942AA] h-full rounded-full"
                  style={{ width: `${item.homePercent}%` }}
                />
              </div>

              <div className="flex-1 bg-[#F9E2E5] h-1 rounded-full overflow-hidden flex justify-start">
                <div
                  className="bg-[#5C161D] h-full rounded-full"
                  style={{ width: `${item.awayPercent}%` }}
                />
              </div>

              <span className="text-xs font-bold text-[#5C161D] w-4 text-right">
                {item.awayVal}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}