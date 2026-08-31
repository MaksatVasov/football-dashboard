const HOME_TEAM = [
  { id: 1, role: "GK", name: "Diogo Costa" },
  { id: 2, role: "DF", name: "Danilo Pereira" },
  { id: 3, role: "DF", name: "Pepe" },
  { id: 4, role: "DF", name: "Rúben Dias" },
  { id: 5, role: "MF", name: "Bernardo Silva" },
  { id: 6, role: "MF", name: "Bruno .F" },
  { id: 7, role: "MF", name: "João Palhinha" },
  { id: 8, role: "MF", name: "Nuno Mendes" },
  { id: 9, role: "FW", name: "C. Ronaldo" },
  { id: 10, role: "FW", name: "João Félix" },
  { id: 11, role: "FW", name: "Ricardo Horta" },
];

const AWAY_TEAM = [
  { id: 1, role: "GK", name: "T. Courtois" },
  { id: 2, role: "DF", name: "Wout Faes" },
  { id: 3, role: "DF", name: "T. Meunier" },
  { id: 4, role: "DF", name: "A. Theate" },
  { id: 5, role: "MF", name: "Kevin D.B" },
  { id: 6, role: "MF", name: "Axel Witsel" },
  { id: 7, role: "MF", name: "H. Vanaken" },
  { id: 8, role: "MF", name: "A. Onana" },
  { id: 9, role: "FW", name: "R. Lukaku" },
  { id: 10, role: "FW", name: "E. Hazard" },
  { id: 11, role: "FW", name: "D. Mertens" },
];

export default function TeamLineUp() {
  return (
    <div className="bg-white rounded-2xl p-6 w-full mt-4 border border-gray-100 shadow-sm">
      <h2 className="text-gray-900 font-bold mb-6">Line Ups</h2>

      <div className="flex justify-between">
        <div className="flex flex-col gap-3 pr-4">
          {HOME_TEAM.map((player) => (
            <div key={player.id} className="flex gap-2 items-center text-[13px]">
              <span className="text-green-600 font-bold w-5">{player.role}</span>
              <span className="text-gray-700 truncate">{player.name}</span>
            </div>
          ))}
        </div>
        <div className="w-px bg-gray-200 self-stretch" />
        <div className="flex flex-col gap-3 pl-2">
          {AWAY_TEAM.map((player) => (
            <div key={player.id} className="flex justify-end gap-2 items-center text-[13px]">
              <span className="text-gray-700 truncate text-right">{player.name}</span>
              <span className="text-[#7F1D1D] font-bold w-5 text-right">{player.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}