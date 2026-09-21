import { useOutletContext } from "react-router-dom";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { MENU_ITEMS } from "../components/Sidebar";
import useRequiredContext from "../hooks/useRequiredContext";
import { DataContext } from "../contexts/DataContext";

import Loader from "../components/Loader";
import FeaturedBanner from "../components/FeaturedBanner";
import LiveMatchWidget from "../components/LiveMatchWidget";
import FootballMatches from "../components/FootballMatches";
import Standings from "../components/Standings";
import FollowClub from "../components/FollowClub";
import { Shopping } from "../components/Shopping";
import DownloadAppPromo from "../components/DownloadAppPromo";
import NewsSection from "../components/NewsSection";

const SECTION_IDS = MENU_ITEMS.map((item) => item.id);

export default function MainPage() {
  const { isLoadingData } = useRequiredContext(DataContext);
  const { setActiveSection } = useOutletContext<{ setActiveSection: (id: string) => void }>();

  useScrollSpy({
    sectionIds:  SECTION_IDS,
    setActiveSection,
    isLoadingData
  });

  if (isLoadingData) {
    return <Loader />;
  }

  return (
    <main className="max-w-full mt-1.5 mx-auto p-5 bg-surface shadow-sm border border-line rounded-3xl lg:max-w-7xl">
      <div id="dashboard" className="flex flex-col lg:flex-row gap-6 mb-12">
        <FeaturedBanner />
        <LiveMatchWidget />
      </div>

      <FootballMatches />
      <Standings />
      <FollowClub />
      <Shopping />
      <DownloadAppPromo />
      <NewsSection />
    </main>
  );
}