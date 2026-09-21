import { Link } from "react-router-dom";
import { ArrowLeft, Clock, RotateCw, SearchX, WifiOff } from "lucide-react";
import type { ReactNode } from "react";

export type LoadError = "rate-limit" | "not-found" | "generic";

const CONTENT: Record<LoadError, { icon: ReactNode; title: string; text: string }> = {
    "rate-limit": {
        icon: <Clock className="w-10 h-10 text-accent" />,
        title: "Daily request limit reached",
        text: "The free football API allows a limited number of requests per day, and today's quota is used up. It resets every day at 00:00 UTC. Matches you've already opened are still available.",
    },
    "not-found": {
        icon: <SearchX className="w-10 h-10 text-accent" />,
        title: "Match not found",
        text: "We couldn't find details for this match. It may have been removed or the link is incorrect.",
    },
    generic: {
        icon: <WifiOff className="w-10 h-10 text-accent" />,
        title: "Couldn't load the match",
        text: "Something went wrong while loading the data. Check your connection and try again.",
    },
};

export default function ErrorState({ kind, onRetry }: { kind: LoadError; onRetry: () => void }) {
    const { icon, title, text } = CONTENT[kind];

    return (
        <div className="flex min-h-[60vh] items-center justify-center p-5">
            <div className="flex w-full max-w-lg flex-col items-center rounded-2xl border border-line bg-surface p-8 text-center shadow-sm md:p-12">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                    {icon}
                </div>

                <h2 className="mb-3 text-2xl font-extrabold text-fg">{title}</h2>
                <p className="mb-8 text-muted">{text}</p>

                <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                    {kind !== "not-found" && (
                        <button
                            onClick={onRetry}
                            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-on-accent shadow-sm transition-colors hover:opacity-90"
                        >
                            <RotateCw className="h-4 w-4" />
                            Try again
                        </button>
                    )}
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-bold text-fg transition-colors hover:border-accent hover:text-accent"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to matches
                    </Link>
                </div>
            </div>
        </div>
    );
}