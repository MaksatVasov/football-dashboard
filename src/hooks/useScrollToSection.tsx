import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToSection() {
    const location = useLocation();
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;

    useEffect(() => {
        if (!target) return;

        let frame = 0;
        let attempts = 0;

        const tryScroll = () => {
            const el = document.getElementById(target);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            } else if (attempts++ < 30) {
                frame = requestAnimationFrame(tryScroll);
            }
        };

        tryScroll();
        return () => cancelAnimationFrame(frame);
    }, [target, location.key]);
}