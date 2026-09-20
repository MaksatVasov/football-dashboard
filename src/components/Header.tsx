import burgerIcon from "../assets/images/header/burger-icon.png";
import logo from "../assets/images/header/Logo-header.svg";
import unauthorizedUser from "../assets/images/header/unauthorized-user.png";
import { Sun, ShoppingBag } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-[#F6F6F4] px-4 py-3 flex flex-col xl:flex-row xl:items-center xl:justify-end border-b border-gray-200/60">

            {/* Мобильная часть */}
            <div className="flex items-center justify-between w-full xl:hidden">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        aria-label="Open menu"
                        className="w-8 h-8 flex items-center justify-center text-gray-700 hover:opacity-75 transition-opacity"
                    >
                        <img className="w-6 h-6" src={burgerIcon} alt="" />
                    </button>

                    <a href="#" className="flex items-center gap-2">
                        <img src={logo} className="w-6 h-6" alt="OneFootball Logo" />
                        <span className="font-bold text-base tracking-tight text-gray-900">OneFootball</span>
                    </a>
                </div>

                <div className="flex gap-2 text-gray-600 items-center">
                    <button className="hidden md:block p-1 hover:bg-gray-200 rounded-lg transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                    </button>

                    <button className="hidden md:block p-1 hover:bg-gray-200 rounded-lg transition-colors">
                        <Sun className="w-5 h-5" />
                    </button>

                    <button type="button">
                        <img src={unauthorizedUser} className="w-8 h-8 rounded-full object-cover border border-amber-100" alt="User Profile" />
                    </button>
                </div>
            </div>

            {/* Десктопная часть */}
            <div className="hidden xl:flex items-center gap-4 lg:gap-6">
                <div className="flex items-center gap-1 text-gray-600">
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                    </button>

                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <Sun className="w-5 h-5" />
                    </button>
                </div>

                <button type="button">
                    <img src={unauthorizedUser} className="w-10 h-10 rounded-full object-cover border border-amber-100" alt="User Profile" />
                </button>
            </div>

        </header>
    );
}