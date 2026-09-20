import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import DataProvider from "../contexts/DataContext";
import FollowedClubsProvider from "../contexts/FollowedClubsContext";
import { useState } from "react";


export default function Layout() {

    const [activeSection, setActiveSection] = useState<string>("dashboard");

    return (
        <DataProvider>
            <FollowedClubsProvider>
                <section className="flex flex-col xl:flex-row relative">

                    <div className="hidden xl:block sticky top-0 h-screen shrink-0">
                        <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
                    </div>
                    <div className="grow bg-[#F6F6F4]">
                        <Header />
                        <Outlet context={{ setActiveSection }} />
                        <Footer />
                    </div>

                </section>
            </FollowedClubsProvider>
        </DataProvider>
    )

}