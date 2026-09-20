
import { useRef, useState, useEffect } from "react";
import { type News } from "../types";

import { NEWS_DATA } from "../data/newsData";




const filterObj = {
    "All News": () => {
        return true
    },
    "Hot News": (item: News) => {
        return item.type === "hot";
    },
    "Transfers": (item: News) => {
        return item.type === "transfer";
    }
}



export default function useNewsSection() {

    const newsTabs = ["All News", "Hot News", "Transfers"] as const;
    type NewsTab = typeof newsTabs[number];
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const [curTab, setTab] = useState<NewsTab>(newsTabs[0]);


    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            // console.log("scrollLeft: ", scrollLeft, "scrollWidth: ", scrollWidth, "clientWidth: ",clientWidth)
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

    const newsArr = NEWS_DATA.filter(filterObj[curTab]);

    return { scroll, canScrollLeft, canScrollRight, scrollRef, checkScroll, newsTabs, setTab, curTab, newsArr }
}