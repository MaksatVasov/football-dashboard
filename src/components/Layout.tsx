import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import DataProvider from "../contexts/DataContext";
import FollowedClubsProvider from "../contexts/FollowedClubsContext";
import RateLimitModal from "./RateLimitModal";
import { useState } from "react";
import useScrollToSection from "../hooks/useScrollToSection";


export default function Layout() {

    useScrollToSection();

    const [activeSection, setActiveSection] = useState<string>("dashboard");

    return (
        <DataProvider>
            <FollowedClubsProvider>
                <section className="flex flex-col xl:flex-row relative">

                    <div className="hidden xl:block sticky top-0 h-screen shrink-0">
                        <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
                    </div>
                    <div className="grow bg-[#F6F6F4] flex flex-col min-h-screen">
                        <Header />
                        <div className="flex-1">
                            <Outlet context={{ setActiveSection }} />
                        </div>
                        <Footer />
                    </div>
                    <RateLimitModal />
                </section>
            </FollowedClubsProvider>
        </DataProvider>
    )

}