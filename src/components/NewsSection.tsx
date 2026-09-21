import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import useNewsSection from "../hooks/useNewsSection";

export default function NewsSection() {
  const { scroll, canScrollLeft, canScrollRight, scrollRef, checkScroll, newsTabs, setTab, curTab, newsArr } = useNewsSection();

  return (
    <section id="news" className="w-full bg-surface pt-8 border-t-[3px] border-line">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">📰</span>
        <h2 className="text-lg font-bold text-fg">All News and Transfers Today</h2>
      </div>

      <div className="flex items-center justify-between border-b border-line mb-6">
        <div className="flex gap-6">
          {newsTabs.map((tabName) => {
            return (
              <button key={tabName} onClick={() => setTab(tabName)} className={`pb-3 text-sm font-bold text-fg border-b-2  ${curTab === tabName ? "border-b-yellow-500" : "border-b-transparent"}`}>
                {tabName}
              </button>
            )
          })}
        </div>

        <div className="hidden sm:flex items-center gap-2 pb-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-1.5 rounded-full border transition-all ${canScrollLeft
              ? "border-line text-fg hover:bg-surface-2"
              : "border-line text-muted cursor-not-allowed opacity-50"
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-1.5 rounded-full border transition-all ${canScrollRight
              ? "border-line text-fg hover:bg-surface-2"
              : "border-line text-muted cursor-not-allowed opacity-50"
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
        {newsArr.map((news) => (
          <Link key={news.id} to={`/news/${news.id}`} className="flex flex-col shrink-0 w-65 md:w-70 cursor-pointer group">
            <article className="flex flex-col h-full">
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-4">
                <img
                  src={news.img}
                  alt="News thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-[11px] font-bold text-yellow-600 mb-2">
                {news.category}
              </span>
              <h3 className="text-[15px] font-bold text-fg leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                {news.title}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed line-clamp-2">
                {news.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}