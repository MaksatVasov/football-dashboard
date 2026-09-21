import { ChevronLeft, ChevronRight, Goal } from "lucide-react";
import { useFollowClub } from "../hooks/useFollowClub";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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

  const location = useLocation();

  useEffect(() => {

    if (location.hash !== "#follow-club-section") {
      return;
    }

    const timer = setTimeout(() => {
      document.getElementById("follow-club-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);

  }, [location]);

  const hasTeams = renderReadyTeams && renderReadyTeams.length > 0;

  return (
    <section id="follow-club-section" className="w-full mb-12 max-w-full pt-8 md:mb-8 border-line border-t-[3px]">
      <h2 className="flex gap-2 mb-6 text-lg font-bold text-fg">
        <Goal /> Follow club
      </h2>

      {!hasTeams ? (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-surface-2 rounded-xl border border-dashed border-line">
          <span className="text-4xl mb-3">🛡️</span>
          <h3 className="text-[15px] font-semibold text-fg">
            No clubs available
          </h3>
          <p className="text-sm text-muted mt-1">
            Clubs list is empty or currently unavailable
          </p>
        </div>
      ) : (
        <>
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="max-w-full overflow-x-auto md:overflow-x-hidden overflow-y-hidden mb-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
          >
            <div className="flex py-1.5 w-max gap-3">
              {renderReadyTeams.map((club) => {
                const teamLogo = club.team.logo;
                const teamId = club.team.id;
                const isFollowed = followedClubs.some((item) => item.id === club.team.id);

                return (
                  <button
                    key={teamId}
                    type="button"
                    className={`h-31 w-31 shrink-0 rounded-full bg-surface-2 p-7 transition-all hover:scale-95 ${isFollowed ? "outline-[3px] outline-accent" : ""
                      }`}
                    onClick={() => toggleFollow(club.team)}
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
              className="hidden md:flex z-10 h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg shadow-sm transition-all duration-200 hover:bg-surface-2 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none disabled:hover:bg-surface disabled:active:scale-100"
              aria-label="Previous clubs"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.2]" />
            </button>

            <button
              type="button"
              disabled={!canScrollRight}
              onClick={() => scroll("right")}
              className="hidden md:flex z-10 h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg shadow-sm transition-all duration-200 hover:bg-surface-2 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none disabled:hover:bg-surface disabled:active:scale-100"
              aria-label="Next clubs"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.2]" />
            </button>
          </div>
        </>
      )}
    </section>
  );
}