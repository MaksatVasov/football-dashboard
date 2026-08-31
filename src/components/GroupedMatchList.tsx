import MatchRow from "./MatchRow";

export default function GroupedMatchList({ matches }) {
  // console.log(matches)
  return (
    <div className="relative">
      <h2 className="sticky top-0 z-10 bg-[#F4F1FD] border-b-2 border-[#5942AA] py-3 px-4 flex items-center gap-3 text-[#3B2C70] font-extrabold uppercase text-sm">
        <img className="w-8 h-8 object-contain" src={matches[0].league.logo} alt={matches[0].league.name} />
        {matches[0].league.name}
      </h2>
      {matches.map((item) => <MatchRow key={item.fixture.id} match={item} />)}
    </div>
  );
}