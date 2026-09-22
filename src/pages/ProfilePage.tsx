import { Link } from "react-router-dom";
import { LogIn, UserPlus, ShieldCheck, Bell, Heart } from "lucide-react";
import unauthorizedUser from "../assets/images/header/unauthorized-user.png";

const PERKS = [
    {
        icon: Heart,
        title: "Save your favorite clubs",
        text: "Follow teams and get back to them in one click, synced across devices.",
    },
    {
        icon: Bell,
        title: "Personalized notifications",
        text: "Get notified about live scores, goals, and news from your favorite clubs.",
    },
    {
        icon: ShieldCheck,
        title: "Secure & fast checkout",
        text: "Save your details for a quicker checkout when ordering official kits.",
    },
];

export default function ProfilePage() {
    return (
        <main className="w-full lg:max-w-5xl mx-auto min-h-screen bg-surface rounded-none lg:rounded-2xl mt-0 lg:mt-6 mb-10 pb-16 shadow-sm border border-transparent lg:border-line">
            <div className="w-full mx-auto px-6 pt-8 lg:px-12 lg:pt-12 animate-in fade-in duration-300">

                <div className="flex flex-col items-center text-center gap-4 mb-10">
                    <div className="relative">
                        <img
                            src={unauthorizedUser}
                            alt="Guest profile"
                            className="w-24 h-24 rounded-full object-cover border-4 border-line"
                        />
                        <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-surface-2 border-2 border-surface flex items-center justify-center text-[10px]">
                            👤
                        </span>
                    </div>

                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-fg leading-tight">
                            You're not signed in
                        </h1>
                        <p className="text-muted mt-2 max-w-sm">
                            Sign in to save your favorite clubs, track your orders, and get personalized match updates.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
                        <button
                            type="button"
                            disabled
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-on-accent font-bold shadow-sm opacity-60 cursor-not-allowed"
                        >
                            <LogIn className="w-5 h-5" />
                            Sign In
                        </button>
                        <button
                            type="button"
                            disabled
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-line text-fg font-bold hover:border-accent hover:text-accent transition-colors opacity-60 cursor-not-allowed"
                        >
                            <UserPlus className="w-5 h-5" />
                            Create Account
                        </button>
                    </div>

                    <span className="text-xs text-muted mt-1">
                        Authentication is coming soon
                    </span>
                </div>

                <div className="h-px w-full bg-line mb-10"></div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {PERKS.map(({ icon: Icon, title, text }) => (
                        <div
                            key={title}
                            className="flex flex-col items-start gap-3 p-5 rounded-2xl border border-line bg-surface-2"
                        >
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="text-sm font-bold text-fg">{title}</h3>
                            <p className="text-xs text-muted leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        to="/favorites"
                        className="text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
                    >
                        Browse your followed clubs without signing in →
                    </Link>
                </div>
            </div>
        </main>
    );
}