import { useEffect, useRef, useState } from "react";
import useRequiredContext from "./useRequiredContext";
import { DataContext } from "../contexts/DataContext";
import { FollowedClubsContext } from "../contexts/FollowedClubsContext";
import type { Team } from "../types";

export function useFollowClub() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { curTable } = useRequiredContext(DataContext);
  const { setFollowClub, followedClubs } = useRequiredContext(FollowedClubsContext);

  const ArrOfteams = curTable?.standings;
  const renderReadyTeams = Array.isArray(ArrOfteams) ? ArrOfteams[0] : [];

  useEffect(() => {
    window.addEventListener("resize", checkScroll);
    checkScroll();
    
    return () => window.removeEventListener("resize", checkScroll);
  }, [renderReadyTeams]);

  function checkScroll() {
    const element = scrollRef.current;
    
    if (!element) return;

    const { scrollLeft, scrollWidth, clientWidth } = element;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
  }

  const scroll = (direction: "left" | "right"): void => {
    const element = scrollRef.current;
    
    if (!element) return;

    const scrollAmount = Math.floor(element.clientWidth * 0.8);

    element.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const toggleFollow = (team: Team) => {
    if (followedClubs.some((item) => item.id === team.id)) {
      setFollowClub(followedClubs.filter((item) => item.id !== team.id));
    } else {
      setFollowClub((prev) => [...prev, team]);
    }
  };

  return {
    scrollRef,
    renderReadyTeams,
    followedClubs,
    canScrollLeft,
    canScrollRight,
    scroll,
    checkScroll,
    toggleFollow,
  };
}