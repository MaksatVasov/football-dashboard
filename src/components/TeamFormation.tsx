import teamLogo from "../assets/images/mainPage/italy.png";

const HOME_POSITIONS = [
  { id: 1, top: "50%", left: "10%" },
  { id: 2, top: "70%", left: "25%" },
  { id: 3, top: "30%", left: "25%" },
  { id: 4, top: "15%", left: "30%" },
  { id: 5, top: "85%", left: "30%" },
  { id: 6, top: "75%", left: "40%" },
  { id: 7, top: "25%", left: "40%" },
  { id: 8, top: "50%", left: "40%" },
  { id: 9, top: "85%", left: "55%" },
  { id: 10, top: "50%", left: "55%" },
  { id: 11, top: "15%", left: "55%" },
];

const AWAY_POSITIONS = [
  { id: 1, top: "50%", left: "90%" },
  { id: 2, top: "30%", left: "75%" },
  { id: 3, top: "50%", left: "75%" },
  { id: 4, top: "70%", left: "75%" },
  { id: 5, top: "85%", left: "60%" },
  { id: 6, top: "65%", left: "60%" },
  { id: 7, top: "35%", left: "60%" },
  { id: 8, top: "15%", left: "60%" },
  { id: 9, top: "75%", left: "45%" },
  { id: 10, top: "50%", left: "45%" },
  { id: 11, top: "25%", left: "45%" },
];

export default function TeamFormation() {
  return (
    <div className="bg-white mt-6 rounded-2xl p-6 w-full border border-gray-100 shadow-sm">
      <h2 className="text-gray-900 font-bold text-lg mb-8">Team Formation</h2>

      <div className="flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-3">
          <img src={teamLogo} alt="Home" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-gray-900 font-bold">Portugal</span>
            <span className="text-gray-500 text-sm">4-3-3</span>
          </div>
        </div>
        <span className="text-gray-400 font-bold">FT</span>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-gray-900 font-bold">Belgium</span>
            <span className="text-gray-500 text-sm">3-4-3</span>
          </div>
          <img src={teamLogo} alt="Away" className="w-10 h-10 object-contain" />
        </div>
      </div>

      <div className="w-full h-100 bg-[#1a4a1c] border-2 border-white/80 relative rounded-md overflow-hidden">
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/80 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white/80 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/80 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-24 h-48 border-2 border-l-0 border-white/80 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-24 h-48 border-2 border-r-0 border-white/80 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-12 h-24 border-2 border-l-0 border-white/80 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-12 h-24 border-2 border-r-0 border-white/80 -translate-y-1/2"></div>

        {HOME_POSITIONS.map((pos) => (
          <div
            key={`home-${pos.id}`}
            className="absolute w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold -translate-x-1/2 -translate-y-1/2 shadow-lg"
            style={{ top: pos.top, left: pos.left }}
          >
            {pos.id}
          </div>
        ))}

        {AWAY_POSITIONS.map((pos) => (
          <div
            key={`away-${pos.id}`}
            className="absolute w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xs font-bold -translate-x-1/2 -translate-y-1/2 shadow-lg"
            style={{ top: pos.top, left: pos.left }}
          >
            {pos.id}
          </div>
        ))}
      </div>
    </div>
  );
}