import { ChevronDown } from "lucide-react";
import useFootballMatches from "../hooks/useFootballMatches";
import GroupedMatchList from "./GroupedMatchList";




export default function FootballMatches() {


  const { activeTab, setActiveTab, renderReadyMatches, TABS, setPagination, curPagination, curCategory } = useFootballMatches();
  // console.log(renderReadyMatches, "готовые к рендеру матчи")
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
            className={`pb-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
              ? "border-[#5942AA] text-gray-900"
              : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
          >
            {tab}
          </button>
        ))}
        {/* <div className="ml-auto flex justify-end">
          <button onClick={() => setPagination((prev) => prev + 15)} className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-900 transition-colors">
            {(isShowed) ? "Show Less" : "View All"}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div> */}
      </div>

      <div className="flex flex-col gap-3 md:gap-2">



        {renderReadyMatches.map(([curleague, matches]) => <GroupedMatchList key={curleague} matches={matches} />)}
        <button onClick={() => {

          if (curPagination > curCategory.length) {
            setPagination(10);
            return;
          }

          setPagination((prev) => prev + 15)

        }} className="mx-auto mt-6 flex items-center justify-center gap-2 px-6 py-2.5 bg-white hover:bg-[#5942AA] text-gray-700 hover:text-white text-sm font-semibold rounded-xl border border-gray-200 hover:border-[#5942AA] shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer">
          <span>{(curPagination > curCategory.length) ? "Show less" : "Show more"}</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
}