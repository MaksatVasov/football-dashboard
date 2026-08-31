import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import DataProvider from "../contexts/DataContex";



export default function Layout() {


    return (
        <DataProvider>
            <section className="flex flex-col xl:flex-row relative">

                <div className="hidden xl:block sticky top-0 h-screen shrink-0">
                    <Sidebar />
                </div>
                <div className="grow bg-[#F6F6F4]">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>

            </section>
        </DataProvider>
    )

}