import { LayoutGrid, MonitorPlay, Trophy, ShoppingBag, Newspaper, Heart } from "lucide-react";
import logo from "../assets/images/header/Logo-header.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const MENU_ITEMS = [
    { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
    { id: "matches", label: "Live Football", icon: MonitorPlay },
    { id: "standings", label: "Standings", icon: Trophy },
    { id: "shop", label: "Shop", icon: ShoppingBag },
    { id: "news", label: "News", icon: Newspaper },
];

interface SidebarProps {
    activeSection: string;
    setActiveSection: (id: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    const handleNavigate = (id: string): void => {
        setActiveSection(id);

        if (isHome) {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/", { state: { scrollTo: id } });
        }
    };

    return (
        <aside className="hidden lg:flex h-full bg-sidebar border-r border-line shrink-0 z-20">
            <div className="w-60 flex flex-col py-5 px-6 overflow-y-auto">
                <Link to="/" className="flex items-center gap-2 mb-10 pl-2">
                    <img src={logo} className="w-7 h-7 text-purple-600" alt="Logo" />
                    <span className="font-bold text-lg tracking-tight text-fg">OneFootball</span>
                </Link>

                <h2 className="text-[11px] font-bold text-muted tracking-wider mb-4 pl-2">
                    MENU
                </h2>

                <nav className="flex flex-col gap-1.5">
                    {MENU_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = isHome && activeSection === item.id;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => handleNavigate(item.id)}
                                className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-2xl transition-colors ${isActive
                                    ? "text-accent font-semibold bg-accent/10"
                                    : "text-muted hover:text-fg hover:bg-surface-2 font-medium"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                <div className="my-6 border-t border-line" />

                <h2 className="text-[11px] font-bold text-muted tracking-wider mb-4 pl-2">
                    MY TEAMS
                </h2>

                <nav className="flex flex-col gap-1.5">
                    <Link
                        to="/favorites"
                        className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-2xl transition-colors group ${pathname === "/favorites"
                            ? "text-accent font-semibold bg-accent/10"
                            : "text-muted hover:text-fg hover:bg-surface-2 font-medium"
                            }`}
                    >
                        <Heart className="w-5 h-5 transition-colors group-hover:text-rose-500" />
                        <span>Favorite Clubs</span>
                    </Link>
                </nav>
            </div>
        </aside>
    );
}