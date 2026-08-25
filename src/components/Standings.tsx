import { ChevronDown, ChevronRight, Trophy } from "lucide-react";
import teamLogo from "../assets/images/mainPage/italy.png";
import draw from "../assets/images/mainPage/draw.avif";
import lose from "../assets/images/mainPage/lose.svg";
import win from "../assets/images/mainPage/win.svg";


const STANDINGS_DATA = [
  { id: 1, rank: 1, name: "Chelsea F.C", w: 14, d: 3, l: 1, pts: 35, form: ["W", "W", "W", "W", "D"] },
  { id: 2, rank: 2, name: "Manchester City", w: 13, d: 3, l: 2, pts: 32, form: ["W", "W", "W", "L", "W"] },
  { id: 3, rank: 3, name: "Liverpool", w: 13, d: 3, l: 3, pts: 30, form: ["W", "L", "W", "W", "W"] },
  { id: 4, rank: 4, name: "Manchester United", w: 12, d: 4, l: 3, pts: 28, form: ["L", "W", "W", "W", "W"] },
  { id: 5, rank: 5, name: "West Ham United", w: 11, d: 4, l: 4, pts: 27, form: ["W", "W", "W", "L", "W"] },
  { id: 6, rank: 6, name: "Arsenal FC", w: 11, d: 4, l: 6, pts: 25, form: ["L", "W", "W", "L", "W"] },
];

function getResultImage(value: string) {
  const objOfStyles: Record<string, string> = {
    W: win,
    D: draw,
    L: lose,
  };
  return objOfStyles[value];
}

function TableRow({ item }: any) {
  const { rank, name, w, d, l, pts, form } = item;

  const bgClass = rank > 4 ? "bg-[#FEE6EB]" : "bg-[#F2F0F9]";

  return (
    <div
      className={`grid grid-cols-[30px_minmax(100px,1fr)_1fr_1fr_1fr_1fr] lg:grid-cols-[30px_minmax(100px,2fr)_1fr_1fr_1fr_1fr_2fr] py-4 px-2 items-center rounded-lg ${bgClass}`}
    >
      <span className="justify-self-start text-black text-[1rem]">{rank}</span>
      <span className="text-[#636363]">{name}</span>
      <span className="justify-self-center text-black text-[1rem]">{w}</span>
      <span className="justify-self-center text-black text-[1rem]">{d}</span>
      <span className="justify-self-center text-black text-[1rem]">{l}</span>
      <span className="justify-self-center text-black text-[1rem]">{pts}</span>
      <span className="hidden lg:flex lg:gap-1.5 text-black justify-self-center text-[1rem]">
        {form.map((result: string, index: number) => (
          <span key={`${index}_${result}`}>
            <img className="w-5 h-5 object-contain" src={getResultImage(result)} alt="result" />
          </span>
        ))}
      </span>
    </div>
  );
}

export default function Standings() {
  return (
    <section className="w-full bg-white pt-8 mb-12 border-t-[3px] border-[#EFEFEF]">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <h2 className="text-lg font-bold text-gray-900">Standings</h2>
      </div>

      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center gap-2 hover:bg-gray-50 py-1 rounded-lg transition-colors">
          <span className="text-xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
          <img src={teamLogo} alt="League" className="w-6 h-6 object-contain" />
          <span className="font-semibold text-sm text-gray-900">Premier League</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
        <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-900 transition-colors">
          View All
          <ChevronRight className="w-4 h-4" />
        </button>
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

        <div className="w-full flex flex-col gap-2">
          {STANDINGS_DATA.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </div>
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