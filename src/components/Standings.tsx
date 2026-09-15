import { ChevronDown, Trophy } from "lucide-react";
import draw from "../assets/images/mainPage/draw.avif";
import lose from "../assets/images/mainPage/lose.svg";
import win from "../assets/images/mainPage/win.svg";

import englandLogo from "../assets/images/mainPage/england-logo.avif";
import spainLogo from "../assets/images/mainPage/spain-logo.avif";
import italyLogo from "../assets/images/mainPage/italy-logo.avif";
import germanyLogo from "../assets/images/mainPage/germany-logo.avif";
import franceLogo from "../assets/images/mainPage/france-logo.avif";
import useStandings from "../hooks/useStandings";
import type { Standing } from "../types";


const TOP_LEAGUES = [
  { id: 39, name: "Premier League", country: "England", flag: englandLogo },
  { id: 140, name: "La Liga", country: "Spain", flag: spainLogo },
  { id: 135, name: "Serie A", country: "Italy", flag: italyLogo },
  { id: 78, name: "Bundesliga", country: "Germany", flag: germanyLogo },
  { id: 61, name: "Ligue 1", country: "France", flag: franceLogo },
];

type MatchResult = "W" | "D" | "L";

function getResultImage(value: string) {
  const objOfStyles: Record<MatchResult, string> = {
    W: win,
    D: draw,
    L: lose,
  } as const;


  return objOfStyles[value as MatchResult] || draw;
}

function TableRow({ item }: {item: Standing}) {
  const { rank, points, form, team: { logo, name }, all: { win: winCount, draw: drawCount, lose: loseCount } } = item;
  const curForm = [...(form || "")];

  let bgClass = "bg-gray-50 hover:bg-gray-100";

  if (rank <= 4) {
    bgClass = "bg-[#F2F0F9] hover:bg-[#EAE7F5]";
  } else if (rank >= 5 && rank <= 6) {
    bgClass = "bg-orange-50 hover:bg-orange-100";
  } else if (rank === 7) {
    bgClass = "bg-emerald-50 hover:bg-emerald-100";
  } else if (rank >= 18) {
    bgClass = "bg-[#FEE6EB] hover:bg-[#FCDADF]";
  }

  return (
    <div
      className={`grid grid-cols-[30px_minmax(100px,1fr)_1fr_1fr_1fr_1fr] lg:grid-cols-[30px_minmax(100px,2fr)_1fr_1fr_1fr_1fr_2fr] py-4 px-2 items-center rounded-lg transition-colors cursor-pointer ${bgClass}`}
    >
      <span className="justify-self-start text-black text-[1rem] font-medium">{rank}</span>
      <span className="text-[#636363] flex gap-2 items-center font-medium">
        <img className="w-6 h-6 object-contain" src={logo} alt={name} />
        {name}
      </span>
      <span className="justify-self-center text-black text-[1rem]">{winCount}</span>
      <span className="justify-self-center text-black text-[1rem]">{drawCount}</span>
      <span className="justify-self-center text-black text-[1rem]">{loseCount}</span>
      <span className="justify-self-center text-black text-[1rem] font-bold">{points}</span>

      <span className="hidden lg:flex lg:gap-1.5 text-black justify-self-center text-[1rem]">
        {curForm.map((result, index) => (
          <span key={`${index}_${result}`}>
            <img className="w-5 h-5 object-contain shadow-sm rounded-full" src={getResultImage(result)} alt="result" />
          </span>
        ))}
      </span>
    </div>
  );
}

function LayoutOfTable({ arrayOfTeams }: { arrayOfTeams: Standing[] }) {
  if (!Array.isArray(arrayOfTeams) || arrayOfTeams.length === 0) {
    return (
      <div className="w-full py-12 flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-200 text-gray-400 my-2">
        <span className="text-3xl mb-2">📋</span>
        <p className="text-sm font-medium text-gray-600">No standings data available</p>
        <p className="text-xs text-gray-400 mt-1">Standings for this curTable have not started yet or are unavailable</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {arrayOfTeams.map((item) => (
        <TableRow key={item.team.id} item={item} />
      ))}
    </div>
  );
}

export default function Standings() {
  const { isOpen, setOpen, setLeagueID, curTable } = useStandings();



  const tableToRender = Array.isArray(curTable?.standings) ? curTable.standings[0] : [];

  return (
    <section className="w-full bg-white pt-8 mb-12 border-t-[3px] border-[#EFEFEF]">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <h2 className="text-lg font-bold text-gray-900">Standings</h2>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="relative min-w-50">
          <button onClick={() => setOpen((prev) => !prev)} className="p-1.5 flex gap-1.5 items-center font-medium">
            {curTable?.logo && <img className="w-6 h-6 object-contain" src={curTable.logo} alt={curTable.name} />}
            {curTable?.name || "Select league"}
            <span className={`transition-transform duration-100 ${isOpen ? "rotate-180" : "rotate-0"}`}><ChevronDown /></span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white rounded-xl shadow-md border border-gray-100 py-1 z-10">
              {TOP_LEAGUES.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={() => {
                    setLeagueID(item.id);
                    setOpen(false);
                  }}
                >
                  <img className="w-4 h-4" src={item.flag} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-[30px_minmax(100px,1fr)_1fr_1fr_1fr_1fr] lg:grid-cols-[30px_minmax(100px,2fr)_1fr_1fr_1fr_1fr_2fr] px-2 pb-2">
          <span className="justify-self-start text-black text-[1rem]"></span>
          <span className="text-[#636363]">Club</span>
          <span className="justify-self-center text-black text-[1rem]">W</span>
          <span className="justify-self-center text-black text-[1rem]">D</span>
          <span className="justify-self-center text-black text-[1rem]">L</span>
          <span className="justify-self-center text-black text-[1rem]">PTS</span>
          <span className="hidden lg:block text-black justify-self-center text-[1rem]">LAST MATCHES</span>
        </div>

        <LayoutOfTable arrayOfTeams={tableToRender} />
      </div>

      <div className="flex items-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#5942AA]"></div>
          <span className="text-xs font-semibold text-gray-600">Champions League</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#7A2E39]"></div>
          <span className="text-xs font-semibold text-gray-600">Europa League</span>
        </div>
      </div>
    </section>
  );
}