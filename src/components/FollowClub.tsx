import { ChevronLeft, ChevronRight, Goal } from "lucide-react";
import { useFollowClub } from "../hooks/useFollowClub";

export default function FollowClub() {
  const {
    scrollRef,
    renderReadyTeams,
    followedClubs,
    canScrollLeft,
    canScrollRight,
    scroll,
    checkScroll,
    toggleFollow,
  } = useFollowClub();

  return (
    <section className="w-full mb-12 max-w-full pt-8 md:mb-8 border-[#EFEFEF] border-t-[3px]">
      <h2 className="flex gap-2 mb-6 text-lg font-bold text-gray-900">
        <Goal /> Follow club
      </h2>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="max-w-full overflow-x-auto md:overflow-x-hidden overflow-y-hidden mb-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
      >
        <div className="flex py-1.5 w-max gap-3">
          {renderReadyTeams.map((club) => {
            const teamLogo = club.team.logo;
            const teamId = club.team.id;
            const isFollowed = followedClubs.includes(teamId);

            return (
              <button
                key={teamId}
                type="button"
                className={`h-31 w-31 shrink-0 rounded-full bg-[#F6F6F6] p-7 transition-all hover:scale-95 ${
                  isFollowed ? "outline-[3px] outline-purple-700" : ""
                }`}
                onClick={() => toggleFollow(teamId)}
              >
                <img className="w-17 h-17 object-contain" src={teamLogo} alt={club.team.name} />
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="hidden md:flex justify-between px-2">
        <button
          type="button"
          disabled={!canScrollLeft}
          onClick={() => scroll("left")}
          className="hidden md:flex z-10 h-10 w-10 items-center justify-center rounded-full border border-gray-200/70 bg-white text-gray-800 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none disabled:border-gray-100 disabled:hover:bg-white disabled:active:scale-100"
          aria-label="Previous clubs"
        >
          <ChevronLeft className="h-5 w-5 stroke-[2.2]" />
        </button>
        
        <button
          type="button"
          disabled={!canScrollRight}
          onClick={() => scroll("right")}
          className="hidden md:flex z-10 h-10 w-10 items-center justify-center rounded-full border border-gray-200/70 bg-white text-gray-800 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none disabled:border-gray-100 disabled:hover:bg-white disabled:active:scale-100"
          aria-label="Next clubs"
        >
          <ChevronRight className="h-5 w-5 stroke-[2.2]" />
        </button>
      </div>
    </section>
  );
}