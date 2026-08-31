import { useContext } from "react";
import DownloadAppPromo from "../components/DownloadAppPromo";
import FeaturedBanner from "../components/FeaturedBanner";
import FollowClub from "../components/FollowClub";

import FootballMatches from "../components/FootballMatches";
import LiveMatchWidget from "../components/LiveMatchWidget";
import NewsSection from "../components/NewsSection";
import { Shopping } from "../components/Shopping";
import Standings from "../components/Standings";
import { DataContext } from "../contexts/DataContex";
import Loader from "../components/Loader";


export default function MainPage() {

  const { data } = useContext(DataContext);

  if (!data) {
    return (<Loader />);
  }

  return (
    <main className="max-w-full mt-1.5 mx-auto p-5 bg-white shadow-sm border border-gray-100/80 rounded-3xl lg:max-w-[100rem]">
      <section className="flex flex-col lg:flex-row gap-6 mb-12">
        <FeaturedBanner />
        <LiveMatchWidget />
      </section>
      <FootballMatches />
      <Standings />
      <FollowClub />
      <Shopping />
      <DownloadAppPromo />
      <NewsSection />
    </main>
  );
}