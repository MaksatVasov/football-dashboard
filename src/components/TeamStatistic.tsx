const STATS_DATA = [
  { id: 1, label: "Pass", val1: "542", val2: "431", pct1: 55, pct2: 45 },
  { id: 2, label: "Shoot", val1: "8", val2: "6", pct1: 57, pct2: 43 },
  { id: 3, label: "Shoot on Target", val1: "7", val2: "5", pct1: 58, pct2: 42 },
  { id: 4, label: "Ball Possession", val1: "54%", val2: "46%", pct1: 54, pct2: 46 },
  { id: 5, label: "Red Card", val1: "0", val2: "0", pct1: 0, pct2: 0 },
  { id: 6, label: "Yellow Card", val1: "2", val2: "5", pct1: 28, pct2: 72 },
  { id: 7, label: "Offside", val1: "4", val2: "2", pct1: 66, pct2: 34 },
  { id: 8, label: "Corners", val1: "9", val2: "4", pct1: 69, pct2: 31, highlight: true },
];

export default function TeamStatistic() {
  return (
    <div className="bg-white rounded-2xl p-6 w-full border border-gray-100 shadow-sm">
      <h2 className="text-gray-900 text-center font-bold mb-6">Team Statistic</h2>

      <div className="flex flex-col gap-5">
        {STATS_DATA.map((stat) => (
          <div key={stat.id} className="flex flex-col gap-2">
            <span className="text-gray-500 text-[13px] font-medium text-center">{stat.label}</span>
            <div className="flex items-center justify-between gap-4">
              <span className={`text-[14px] font-bold ${stat.highlight ? "text-green-600" : "text-gray-900"}`}>
                {stat.val1}
              </span>

              <div className="flex-1 flex gap-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${stat.pct1}%` }}
                />
                <div
                  className="h-full bg-[#7F1D1D]"
                  style={{ width: `${stat.pct2}%` }}
                />
              </div>

              <span className={`text-[14px] font-bold ${stat.highlight ? "text-[#7F1D1D]" : "text-gray-900"}`}>
                {stat.val2}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}