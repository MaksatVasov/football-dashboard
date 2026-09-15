import realMadridHomeKit from "../assets/images/kits/real-madrid-home-kit.avif";
import BarcaHomeKit from "../assets/images/kits/barca-home-kit.avif";
import manCityHomeKit from "../assets/images/kits/man-city-home-kit.avif";
import juventusAwayKit from "../assets/images/kits/juventus-away-kit.avif";
import liverpoolAwayKit from "../assets/images/kits/liverpool-home-kit.avif";
import arsenalHomeKit from "../assets/images/kits/arsenal-home-kit.webp";
import bayernHomeKit from "../assets/images/kits/bayern-home-kit.avif";
import psgAwayKit from "../assets/images/kits/psg-home-kit.avif";
import interHomeKit from "../assets/images/kits/inter-home-kit.avif";
import acMilanAwayKit from "../assets/images/kits/milan-away-kit.avif";
import chelseaAwayKit from "../assets/images/kits/chelsea-away-kit.webp";
import manUnitedHomeKit from "../assets/images/kits/man-united-home-kit.webp";
import dortmundHomeKit from "../assets/images/kits/dortmund-home-kit.avif";
import atleticoHomeKit from "../assets/images/kits/atletico-madrid-home-kit.avif";
import tottenhamAwayKit from "../assets/images/kits/totenham-away-kit.avif";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
const SHOP_ITEMS = [
  { id: 1, name: "Real Madrid Home Kit 26 / 27", price: "$150.10", img: realMadridHomeKit },
  { id: 2, name: "Barcelona Home Kit 26 / 27", price: "$125.00", img: BarcaHomeKit },
  { id: 3, name: "Manchester City Home Kit 26 / 27", price: "$135.00", img: manCityHomeKit },
  { id: 4, name: "Juventus Away Kit 26 / 27", price: "$115.00", img: juventusAwayKit },
  { id: 5, name: "Liverpool Home Kit 26 / 27", price: "$140.00", img: liverpoolAwayKit },
  { id: 6, name: "Arsenal Home Kit 26 / 27", price: "$120.50", img: arsenalHomeKit },
  { id: 7, name: "Bayern Munich Home Kit 26 / 27", price: "$125.50", img: bayernHomeKit },
  { id: 8, name: "PSG Away Kit 22 / 23", price: "$67.00", img: psgAwayKit },
  { id: 9, name: "Inter Milan Home Kit 26 / 27", price: "$115.00", img: interHomeKit },
  { id: 10, name: "AC Milan Away Kit 26 / 27", price: "$112.00", img: acMilanAwayKit },
  { id: 11, name: "Chelsea Away Kit 26 / 27", price: "$125.00", img: chelseaAwayKit },
  { id: 12, name: "Manchester United Away Kit 26 / 27", price: "$138.00", img: manUnitedHomeKit },
  { id: 13, name: "Borussia Dortmund Home Kit 25 / 26", price: "$590.00", img: dortmundHomeKit },
  { id: 14, name: "Atletico Madrid Home Kit 17 / 18", price: "$55.00", img: atleticoHomeKit },
  { id: 15, name: "Tottenham Away Kit 26 / 27", price: "$118.00", img: tottenhamAwayKit },
];

export function Shopping() {

  const div = useRef<HTMLDivElement | null>(null);

  const scrollKits = (distance: number): void => {

    div.current?.scrollBy({
      left: distance,
      behavior: "smooth"
    })

  }

  return (
    <div className="w-full pt-8 mb-12 border-[#EFEFEF] border-t-[3px]">
      <div className="flex items-center gap-2 mb-4 px-2">
        <span className="text-lg">👕</span>
        <h2 className="text-[15px] font-bold text-gray-900">Shopping</h2>
      </div>

      <div ref={div} className="flex overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none px-2 pb-2">
        {SHOP_ITEMS.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 shrink-0 w-45 cursor-pointer group">
            <div className="w-full h-50 bg-[#F8F9FA] rounded-2xl flex items-center justify-center p-4 transition-colors group-hover:bg-gray-100">
              <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div className="flex flex-col px-1">
              <span className="text-[13px] font-semibold text-gray-900 mb-1">{item.name}</span>
              <span className="text-[13px] font-bold text-[#5942AA]">{item.price}</span>
            </div>
          </div>
        ))}


      </div>
      <div className="flex justify-between">
        <button
          onClick={() => scrollKits(-300)}
          className="hidden md:flex
            z-10
            h-10 w-10
            items-center justify-center
            rounded-full bg-white/90 shadow-md"
          aria-label="Previous kits"
          type="button"><ChevronLeft /></button>

        <button
          onClick={() => scrollKits(300)}
          className="hidden md:flex
            z-10
            h-10 w-10
            items-center justify-center
            rounded-full bg-white/90 shadow-md"
          type="button"><ChevronRight /></button>
      </div>
    </div>
  );
}