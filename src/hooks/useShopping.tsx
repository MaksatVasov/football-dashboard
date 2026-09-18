import { useEffect, useRef, useState } from "react";


export default function useShopping() {

    const [scrollLeft, setScrollLeft] = useState(false);
    const [scrollRight, setScrollRight] = useState(false);

    const div = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        window.addEventListener("resize", checkScroll);

        checkScroll();

        return () => window.removeEventListener("resize", checkScroll);

    }, [])

    const scrollKits = (direction: "left" | "right"): void => {

        const element = div.current;

        if (!element) return;

        const scrollAmount = Math.floor(element.clientWidth * 0.8);


        element.scrollBy({
            left: (direction === "left") ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        })

    }

    function checkScroll() {

        const element = div.current;

        if (!element) return;

        const { scrollLeft, scrollWidth, clientWidth } = element;

        setScrollLeft(scrollLeft > 0);
        setScrollRight(Math.ceil((scrollLeft + clientWidth)) < scrollWidth);

    }

    return { scrollKits, div, scrollLeft, scrollRight, checkScroll };

}