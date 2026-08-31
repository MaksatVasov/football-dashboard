import { AreaChart, Area, XAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const CHART_DATA = [
  { time: "0m", pt: 20, be: 40 },
  { time: "15m", pt: 50, be: 30 },
  { time: "30m", pt: 35, be: 25 },
  { time: "45m", pt: 60, be: 45 },
  { time: "60m", pt: 40, be: 30 },
  { time: "75m", pt: 85, be: 50 },
  { time: "90m", pt: 75, be: 45 },
];

export default function GraphicPerformance() {
  return (
    <div className="bg-white rounded-2xl p-6 w-full border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-gray-900 font-bold text-lg">Graphic Performance</h2>
        <button className="px-3 py-1 bg-white text-gray-500 text-sm rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
          Filter =
        </button>
      </div>

      <div className="h-64 w-full mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={CHART_DATA} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorBe" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7F1D1D" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7F1D1D" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="time" stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12 }} tickLine={false} axisLine={false} />
            <Area type="monotone" dataKey="pt" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorPt)" />
            <Area type="monotone" dataKey="be" stroke="#7F1D1D" strokeWidth={2} fillOpacity={1} fill="url(#colorBe)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-6 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-700 text-sm font-medium">Portugal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#7F1D1D]"></div>
          <span className="text-gray-700 text-sm font-medium">Belgium</span>
        </div>
      </div>
    </div>
  );
}