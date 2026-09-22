import burgerIcon from "../assets/images/header/burger-icon.png";
import logo from "../assets/images/header/Logo-header.svg";
import unauthorizedUser from "../assets/images/header/unauthorized-user.png";
import { Sun, Moon, ShoppingBag } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router-dom";

export default function Header() {
    const { isDark, toggle } = useTheme();

    return (
        <header className="bg-sidebar px-4 py-3 flex flex-col xl:flex-row xl:items-center xl:justify-end border-b border-line">


            <div className="flex items-center justify-between w-full xl:hidden">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        aria-label="Open menu"
                        className="w-8 h-8 flex items-center justify-center text-fg hover:opacity-75 transition-opacity"
                    >
                        <img className="w-6 h-6" src={burgerIcon} alt="" />
                    </button>

                    <a href="#" className="flex items-center gap-2">
                        <img src={logo} className="w-6 h-6" alt="OneFootball Logo" />
                        <span className="font-bold text-base tracking-tight text-fg">OneFootball</span>
                    </a>
                </div>

                <div className="flex gap-2 text-muted items-center">
                    <button className="hidden md:block p-1 hover:bg-surface-2 rounded-lg transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                    </button>

                    <button
                        type="button"
                        aria-label="Toggle theme"
                        onClick={toggle}
                        className="hidden md:block p-1 hover:bg-surface-2 rounded-lg transition-colors"
                    >
                        {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>

                    <Link to="/profile">
                        <img src={unauthorizedUser} className="w-8 h-8 rounded-full object-cover border border-amber-100" alt="User Profile" />
                    </Link>
                </div>
            </div>


            <div className="hidden xl:flex items-center gap-4 lg:gap-6">
                <div className="flex items-center gap-1 text-muted">
                    <button className="p-2 hover:bg-surface-2 rounded-lg transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                    </button>

                    <button
                        type="button"
                        aria-label="Toggle theme"
                        onClick={toggle}
                        className="p-2 hover:bg-surface-2 rounded-lg transition-colors"
                    >
                        {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                </div>

                <Link to="/profile">
                    <img src={unauthorizedUser} className="w-10 h-10 rounded-full object-cover border border-amber-100" alt="User Profile" />
                </Link>
            </div>

        </header>
    );
}