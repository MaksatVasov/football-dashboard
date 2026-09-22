import { ChevronDown } from "lucide-react";
import useFootballMatches from "../hooks/useFootballMatches";
import GroupedMatchList from "./GroupedMatchList";
import type { Match } from "../types";

const PAGE_SIZE = 10;

function MatchesLayout({ arr, setPagination, curPagination, curCategory }: { arr: [string, Match[]][], setPagination: React.Dispatch<React.SetStateAction<number>>, curPagination: number, curCategory: [string, Match[]][] }) {

  if (arr.length === 0) return (
    <div className="w-full py-12 flex flex-col items-center justify-center bg-surface-2 rounded-xl border border-dashed border-line text-muted my-2">
      <span className="text-3xl mb-2">📋</span>
      <p className="text-sm font-medium text-fg">No matches data available</p>
      <p className="text-xs text-muted mt-1">No matches for today or they are unavailable</p>
    </div>
  )

  const totalMatches = curCategory.reduce((sum, [, matches]) => sum + matches.length, 0);
  const needsPagination = totalMatches > PAGE_SIZE;

  const handleToggle = () => {
    const isCollapsing = curPagination > curCategory.length;

    if (isCollapsing) {
      setPagination(PAGE_SIZE);
      document.getElementById("matches")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setPagination((prev) => prev + 15);
  };

  return (
    <>
      {arr.map(([curleague, matches]) => <GroupedMatchList key={curleague} matches={matches} />)}
      {needsPagination && (
        <button onClick={handleToggle} className="mx-auto mt-6 flex items-center justify-center gap-2 px-6 py-2.5 bg-surface hover:bg-accent text-fg hover:text-on-accent text-sm font-semibold rounded-xl border border-line hover:border-accent shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer">
          <span>{(curPagination > curCategory.length) ? "Show less" : "Show more"}</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
        </button>
      )}
    </>
  )

}

export default function FootballMatches() {


  const { activeTab, setActiveTab, renderReadyMatches, TABS, setPagination, curPagination, curCategory } = useFootballMatches();

  return (
    <section id="matches" className="border-t-[3px] pt-8 mb-12 border-line">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">⚽</span>
        <h2 className="text-lg font-bold text-fg">Football Matches</h2>
      </div>

      <div className="flex gap-6 border-b border-line mb-6 overflow-x-auto scrollbar-hide">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
              ? "border-accent text-fg"
              : "border-transparent text-muted hover:text-fg"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 md:gap-2">

        <MatchesLayout arr={renderReadyMatches}
          setPagination={setPagination}
          curPagination={curPagination}
          curCategory={curCategory} />
      </div>
    </section>
  );
}