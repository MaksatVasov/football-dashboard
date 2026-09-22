import MatchRow from "./MatchRow";
import type { GroupedMatchList} from "../types";

export default function GroupedMatchList({ matches} : {matches: GroupedMatchList}) {
  
  return (
    <div className="relative">
      <h2 className="sticky top-0 z-10 bg-[#F4F1FD] dark:bg-[#2E2510] border-b-2 border-accent py-3 px-4 flex items-center gap-3 text-accent font-extrabold uppercase text-sm">
        <img className="w-8 h-8 object-contain" src={matches[0].league.logo} alt={matches[0].league.name} />
        {matches[0].league.name}
      </h2>
      {matches.map((item) => <MatchRow key={item.fixture.id} match={item} />)}
    </div>
  );
}