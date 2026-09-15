import { useRef } from "react";

import { ChevronLeft, ChevronRight, Goal } from "lucide-react";
import useRequiredContext from "../hooks/useRequiredContext";
import { DataContext } from "../contexts/DataContext";
import { FollowedClubsContext } from "../contexts/FollowedClubsContext";
export default function FollowClub() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { curTable } = useRequiredContext(DataContext);
  const { setFollowClub, followedClubs } = useRequiredContext(FollowedClubsContext);

  // useRequiredContext

  const ArrOfteams = curTable?.standings;

  const renderReadyTeams = Array.isArray(ArrOfteams) ? ArrOfteams[0] : [];


  console.log(renderReadyTeams, "teams");

  const scroll = (direction: number): void => {
    scrollRef.current?.scrollBy({
      left: direction * 300,
      behavior: "smooth",
    });
  };

  return (
    //deleted overflow-hidden from section. Be carefull
    <section className="w-full mb-12 max-w-full  pt-8 md:mb-8 border-[#EFEFEF] border-t-[3px]">
      <h2 className="flex gap-2 mb-6 text-lg font-bold text-gray-900"><Goal /> Follow club</h2>

      <div
        ref={scrollRef}
        className="max-w-full overflow-x-auto md:overflow-x-hidden overflow-y-hidden mb-5"
      >
        <div className="flex py-1.5 w-max gap-3">
          {renderReadyTeams.map((club) => {

            const teamLogo = club.team.logo;
            const teamId = club.team.id;

            const isFollowed = followedClubs.includes(teamId);

            return (<button
              key={teamId}
              className={`h-31 w-31 shrink-0 rounded-full bg-[#F6F6F6] p-7 hover:scale-95 ${isFollowed ? "outline outline-purple-700" : ""}`}
              onClick={() => {

                if (followedClubs.includes(teamId)) {

                  const filteredClubs = followedClubs.filter((item) => item !== teamId);

                  setFollowClub(filteredClubs);
                  return;
                };

                setFollowClub((prev) => [...prev, teamId]);


              }}
            >
              <img className="w-17 h-17 object-contain" src={teamLogo} alt={club.team.name} />
            </button>)
          })}
        </div>

      </div>
      <div className=" hidden md:flex justify-between">
        <button
          type="button"
          onClick={() => scroll(-1)}
          className="
            hidden md:flex
            z-10
            h-10 w-10
            items-center justify-center
            rounded-full bg-white/90 shadow-md
          "
          aria-label="Previous clubs"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          className="
            hidden md:flex
            z-10
            h-10 w-10
            items-center justify-center
            rounded-full bg-white/90 shadow-md
            
          "
          aria-label="Next clubs"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}