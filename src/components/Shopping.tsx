import { ChevronRight, ChevronLeft } from "lucide-react";
import useShopping from "../hooks/useShopping";
import { Link } from "react-router-dom";

import { SHOP_ITEMS } from "../data/shopItems";

export function Shopping() {

  const { scrollKits, div, scrollLeft, scrollRight, checkScroll } = useShopping();

  return (
    <div id="shop" className="w-full pt-8 mb-12 border-[#EFEFEF] border-t-[3px]">
      <div className="flex items-center gap-2 mb-4 px-2">
        <span className="text-lg">👕</span>
        <h2 className="text-[15px] font-bold text-gray-900">Shopping</h2>
      </div>

      <div onScroll={checkScroll} ref={div} className="flex overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none px-2 pb-2">
        {SHOP_ITEMS.map((item) => (
          <Link to={`/shop/${item.id}`} key={item.id} className="flex flex-col gap-3 shrink-0 w-45 cursor-pointer group">
            <div className="w-full h-50 bg-[#F8F9FA] rounded-2xl flex items-center justify-center p-4 transition-colors group-hover:bg-gray-100">
              <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div className="flex flex-col px-1">
              <span className="text-[13px] font-semibold text-gray-900 mb-1">{item.name}</span>
              <span className="text-[13px] font-bold text-[#5942AA]">{item.price}</span>
            </div>
          </Link>
        ))}


      </div>
      <div className="flex justify-between mt-3 px-2">
        <button
          type="button"
          disabled={!scrollLeft}
          onClick={() => scrollKits("left")}
          aria-label="Previous kits"
          className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/70 bg-white text-gray-800 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none disabled:border-gray-100 disabled:hover:bg-white disabled:active:scale-100"
        >
          <ChevronLeft className="h-5 w-5 stroke-[2.2]" />
        </button>

        <button
          type="button"
          disabled={!scrollRight}
          onClick={() => scrollKits("right")}
          aria-label="Next kits"
          className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/70 bg-white text-gray-800 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none disabled:border-gray-100 disabled:hover:bg-white disabled:active:scale-100"
        >
          <ChevronRight className="h-5 w-5 stroke-[2.2]" />
        </button>
      </div>
    </div>
  );
}