import { LayoutGrid, MonitorPlay, Trophy, ShoppingBag, Newspaper, ChevronDown, } from "lucide-react";
import logo from "../assets/images/header/Logo-header.svg";


export default function Sidebar() {
    return (
        <aside className="hidden lg:flex h-full bg-white border-r border-gray-200/60 shrink-0 z-20">



            <div className="w-60 flex flex-col py-5 px-6 overflow-y-auto">

                <a href="#" className="flex items-center gap-2 mb-10 pl-2">
                    <img src={logo} className="w-7 h-7 text-purple-600" alt="Logo" />
                    <span className="font-bold text-lg tracking-tight text-gray-900">OneFootball</span>
                </a>

                <div className="text-[11px] font-bold text-gray-400 tracking-wider mb-4 pl-2">
                    MENU
                </div>

                <nav className="flex flex-col gap-1.5 mb-10">
                    <a href="#" className="flex items-center gap-3 text-purple-700 font-semibold bg-[#F5F3FF] px-4 py-2.5 rounded-2xl">
                        <LayoutGrid className="w-5 h-5" />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-4 py-2.5 rounded-2xl transition-colors font-medium">
                        <MonitorPlay className="w-5 h-5" />
                        Live Football
                    </a>
                    <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-4 py-2.5 rounded-2xl transition-colors font-medium">
                        <Trophy className="w-5 h-5" />
                        Standings
                    </a>
                    <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-4 py-2.5 rounded-2xl transition-colors font-medium">
                        <ShoppingBag className="w-5 h-5" />
                        Shop
                    </a>
                    <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-4 py-2.5 rounded-2xl transition-colors font-medium">
                        <Newspaper className="w-5 h-5" />
                        News
                    </a>
                </nav>

                <div className="flex items-center justify-between mb-4 pl-2 pr-2 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors">
                    <span className="text-[11px] font-bold tracking-wider">FOOTBALL LEAGUE</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                <div className="flex items-center justify-between mb-4 pl-2 pr-2 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors">
                    <span className="text-[11px] font-bold tracking-wider">FAVORITE CLUBS</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

            </div>
        </aside>
    );
}