import teamLogo from "../assets/images/mainPage/italy.png";

export default function MatchScoreboard() {
  return (
    <div className="relative w-full bg-white border border-gray-100 rounded-2xl overflow-hidden py-8 px-4 md:px-10 flex items-start justify-between shadow-sm">
      <img
        src={teamLogo}
        alt="bg-left"
        className="absolute -left-16 md:-left-12 top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-[0.04] object-contain pointer-events-none"
      />
      <img
        src={teamLogo}
        alt="bg-right"
        className="absolute -right-16 md:-right-12 top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-[0.04] object-contain pointer-events-none"
      />

      <div className="relative z-10 flex flex-col gap-3 w-1/3">
        <div className="flex items-center gap-3">
          <img src={teamLogo} alt="Portugal" className="w-8 h-8 object-contain" />
          <span className="text-gray-900 text-[15px] md:text-xl font-bold hidden sm:block">Portugal</span>
        </div>
        <div className="flex flex-col text-[11px] md:text-[13px] text-gray-500 gap-1 mt-2">
          <span>C. Ronaldo 15'</span>
          <span>C. Ronaldo 68'</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-1/3">
        <span className="text-gray-900 font-medium text-[12px] md:text-[13px] mb-3 text-center">
          Lusail Stadium
        </span>
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <span className="text-gray-900 text-3xl md:text-4xl font-bold">2</span>
          <span className="text-gray-400 text-sm font-semibold">FT</span>
          <span className="text-gray-900 text-3xl md:text-4xl font-bold">3</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3 w-1/3 items-end">
        <div className="flex items-center gap-3">
          <span className="text-gray-900 text-[15px] md:text-xl font-bold hidden sm:block">Belgium</span>
          <img src={teamLogo} alt="Belgium" className="w-8 h-8 object-contain" />
        </div>
        <div className="flex flex-col text-[11px] md:text-[13px] text-gray-500 gap-1 items-end text-right mt-2">
          <span>R. Lukaku 42'</span>
          <span>E. Hazard 58'</span>
          <span>E. Hazard 90 '+3</span>
        </div>
      </div>
    </div>
  );
}