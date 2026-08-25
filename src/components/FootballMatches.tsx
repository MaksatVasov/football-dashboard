import { useState } from "react";
import { Info, LineChart } from "lucide-react";
import italyLogo from "../assets/images/mainPage/italy.png";

const TABS = ["Latest Match", "Coming Match", "Live Games"];

const MATCHES = [
  { id: 1, team1: "Argentina", flag1: "🇦🇷", score: "1 - 2", team2: "Italy", flag2: "🇮🇹", status: "Full - Time", date: "18 December 2022" },
  { id: 2, team1: "Portugal", flag1: "🇵🇹", score: "2 - 3", team2: "Belgium", flag2: "🇧🇪", status: "Full - Time", date: "18 December 2022" },
  { id: 3, team1: "Ghana", flag1: "🇬🇭", score: "1 - 3", team2: "Brazil", flag2: "🇧🇷", status: "Full - Time", date: "17 December 2022" },
  { id: 4, team1: "Uruguay", flag1: "🇺🇾", score: "2 - 2", team2: "Poland", flag2: "🇵🇱", status: "Full - Time", date: "17 December 2022" },
  { id: 5, team1: "Spanisht", flag1: "🇪🇸", score: "3 - 3", team2: "Czech", flag2: "🇨🇿", status: "Full - Time", date: "16 December 2022" },
];

export default function FootballMatches() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="border-t-[3px] pt-8 mb-12 border-[#EFEFEF]">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">⚽</span>
        <h2 className="text-lg font-bold text-gray-900">Football Matches</h2>
      </div>

      <div className="flex gap-6 border-b border-gray-100 mb-6 overflow-x-auto scrollbar-hide">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab
                ? "border-[#5942AA] text-gray-900"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 md:gap-2">
        {MATCHES.map((match) => (
          <div
            key={match.id}
            className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1.5fr_auto_1.5fr_1.5fr_2fr_auto] items-center gap-y-4 gap-x-2 md:gap-x-4 p-4 md:p-3 bg-[#F9F9F9] rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-2xl shrink-0">
                <img src={italyLogo} className="w-6 h-6 md:w-8 md:h-8 object-contain" alt="" />
              </span>
              <span className="font-semibold text-xs md:text-sm text-gray-900 truncate">
                {match.team1}
              </span>
            </div>

            <div className="bg-[#EBE5F7] text-[#5942AA] px-3 md:px-4 py-1.5 rounded-xl text-xs md:text-sm font-bold min-w-14 md:w-16 text-center justify-self-center">
              {match.score}
            </div>

            <div className="flex items-center justify-end gap-2 md:gap-3">
              <span className="font-semibold text-xs md:text-sm text-gray-900 truncate text-right">
                {match.team2}
              </span>
              <span className="text-2xl shrink-0">
                <img src={italyLogo} className="w-6 h-6 md:w-8 md:h-8 object-contain" alt="" />
              </span>
            </div>

            <div className="flex justify-start md:justify-center">
              <span className="bg-[#FFEAEA] text-[#FF5B5B] px-2 md:px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold whitespace-nowrap">
                {match.status}
              </span>
            </div>

            <div className="text-[11px] md:text-sm text-gray-500 text-center md:text-right md:pr-4 whitespace-nowrap">
              {match.date}
            </div>

            <div className="flex items-center justify-end gap-1 md:gap-2 text-gray-400">
              <button className="p-1 md:p-1.5 hover:text-gray-700 transition-colors">
                <Info className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="p-1 md:p-1.5 hover:text-gray-700 transition-colors">
                <LineChart className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}