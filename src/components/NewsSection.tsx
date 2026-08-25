import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Arsenal from "../assets/images/mainPage/Arsenal.avif";

const NEWS_DATA = [
  {
    id: 1,
    category: "PREMIER LEAGUE",
    title: "Signs of Arsenal getting stronger in the Premier League",
    description: "The victory over Wolves provided a comfortable distance for Arsenal at the top of the table.",
  },
  {
    id: 2,
    category: "PREMIER LEAGUE",
    title: "Erling Haaland Leads Premier League Top Scorers 2022",
    description: "Until the competition break in facing the 2022 World Cup in Qatar, the Norwegian striker has scored 18 goals.",
  },
  {
    id: 3,
    category: "PREMIER LEAGUE",
    title: "Chelsea were humiliated 1-4 at Brighton headquarters",
    description: "Chelsea were humiliated by losing with a big score of 1-4 when they visited the Amex stadium.",
  },
  {
    id: 4,
    category: "PREMIER LEAGUE",
    title: "Garnacho led Manchester United to beat Fulham",
    description: "Midfielder Christian Eriksen not only put United ahead in the 14th minute but controlled the tempo of the game.",
  },
  {
    id: 5,
    category: "SERIE A",
    title: "Juventus prepares massive bid for new midfield superstar",
    description: "The club is reportedly ready to break the bank for the next generation of midfield talent this summer.",
  },
  {
    id: 6,
    category: "LA LIGA",
    title: "Jude Bellingham scores a stunning last-minute winner in El Clasico",
    description: "The English midfielder continues his incredible form, securing three crucial points for Real Madrid in a tense match against Barcelona.",
  },
  {
    id: 7,
    category: "BUNDESLIGA",
    title: "Bayer Leverkusen clinches historic invincible season under Xabi Alonso",
    description: "Xabi Alonso's men have done the impossible, finishing their domestic league campaign without a single defeat to lift the trophy.",
  }
];

export default function NewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white pt-8 border-t-[3px] border-[#EFEFEF]">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">📰</span>
        <h2 className="text-lg font-bold text-gray-900">All News and Transfer Today</h2>
      </div>

      <div className="flex items-center justify-between border-b border-gray-100 mb-6">
        <div className="flex gap-6">
          <button className="pb-3 text-sm font-bold text-gray-900 border-b-2 border-yellow-500">
            All News
          </button>
          <button className="pb-3 text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors">
            Hot News
          </button>
          <button className="pb-3 text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors">
            Transfer
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 pb-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-1.5 rounded-full border transition-all ${
              canScrollLeft
                ? "border-gray-300 text-gray-900 hover:bg-gray-50"
                : "border-gray-100 text-gray-300 cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-1.5 rounded-full border transition-all ${
              canScrollRight
                ? "border-gray-300 text-gray-900 hover:bg-gray-50"
                : "border-gray-100 text-gray-300 cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none pb-2"
      >
        {NEWS_DATA.map((news) => (
          <div key={news.id} className="flex flex-col shrink-0 w-65 md:w-70 cursor-pointer group">
            <div className="w-full h-40 rounded-2xl overflow-hidden mb-4">
              <img
                src={Arsenal}
                alt="News thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="text-[11px] font-bold text-yellow-600 mb-2">
              {news.category}
            </span>
            <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {news.title}
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
              {news.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}