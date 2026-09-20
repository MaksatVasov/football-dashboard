import { useEffect } from "react";

interface UseScrollSpyOptions {
    sectionIds: string[];
    setActiveSection: (id: string) => void;
}

export function useScrollSpy({ sectionIds, setActiveSection }: UseScrollSpyOptions) {
    useEffect(() => {
        if (sectionIds.length === 0) return;

        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null); 

        if (elements.length === 0) return;


        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-90px 0px -60% 0px",
                threshold: 0,
            }
        );


        elements.forEach((el) => observer.observe(el));


        return () => observer.disconnect();
    }, [sectionIds, setActiveSection]);
}