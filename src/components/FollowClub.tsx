import { useRef } from "react";
import teamLogo from "../assets/images/mainPage/italy.png";
import { ChevronLeft, ChevronRight, Goal } from "lucide-react";

const CLUBS = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
  { id: 4, isActive: false },
  { id: 5, isActive: false },
  { id: 6, isActive: false },
  { id: 7, isActive: false },
  { id: 8, isActive: false },
  { id: 9, isActive: false },
  { id: 10, isActive: false },
  { id: 11, isActive: false },
  { id: 12, isActive: false },
  { id: 13, isActive: false },
  { id: 14, isActive: false },
  { id: 15, isActive: false },
  { id: 16, isActive: false },
  { id: 17, isActive: false },
  { id: 18, isActive: false },
  { id: 19, isActive: false },
  { id: 20, isActive: false },
];

export default function FollowClub() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction * 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-full overflow-hidden pt-8 mb-12 border-[#EFEFEF] border-t-[3px]">
      <h2 className="flex gap-2 mb-6 text-lg font-bold text-gray-900"><Goal /> Follow club</h2>


      <div className="relative">
        <div
          ref={scrollRef}
          className="max-w-full overflow-x-auto md:overflow-x-hidden"
        >
          <div className="flex w-max gap-3">
            {CLUBS.map((club) => (
              <div
                key={club.id}
                className="h-31 w-31 shrink-0 rounded-full bg-[#F6F6F6] p-7"
              >
                <img src={teamLogo} alt="" />
              </div>
            ))}
          </div>
        </div>


        <button
          type="button"
          onClick={() => scroll(-1)}
          className="
            hidden md:flex
            absolute left-2 top-1/2 z-10
            h-10 w-10
            -translate-y-1/2
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
            absolute right-2 top-1/2 z-10
            h-10 w-10
            -translate-y-1/2
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