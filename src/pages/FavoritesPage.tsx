import { Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import useRequiredContext from "../hooks/useRequiredContext";
import { FollowedClubsContext } from "../contexts/FollowedClubsContext";

export default function FavoritesPage() {
    const { followedClubs, setFollowClub } = useRequiredContext(FollowedClubsContext);

    const unfollow = (id: number) => {
        setFollowClub((prev) => prev.filter((club) => club.id !== id));
    };

    return (
        <main className="w-full lg:max-w-5xl mx-auto min-h-screen bg-white rounded-none lg:rounded-2xl mt-0 lg:mt-6 mb-10 pb-16 shadow-sm border border-transparent lg:border-gray-100/50">
            <div className="w-full mx-auto px-6 pt-8 lg:px-12 lg:pt-12 animate-in fade-in duration-300">

                <div className="flex flex-col gap-2 mb-8">
                    <span className="text-sm font-extrabold text-[#5942AA] uppercase tracking-wider bg-[#5942AA]/10 px-3 py-1 rounded-full w-fit mb-2">
                        Dashboard
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                        My Favorite Clubs
                    </h1>
                </div>

                <div className="h-px w-full bg-gray-100 mb-8"></div>

                {followedClubs.length === 0 ? (
                    <div className="flex flex-col items-center text-center py-16 px-4">
                        <div className="w-24 h-24 rounded-full bg-[#5942AA]/10 flex items-center justify-center mb-6">
                            <Star className="w-10 h-10 text-[#5942AA]" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                            No favorite clubs yet
                        </h2>

                        <p className="text-gray-500 max-w-md mb-8">
                            Follow your favorite teams and they will show up here,
                            so you can jump to them in one click.
                        </p>

                        <Link
                            to="/#follow-club-section"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5942AA] text-white font-bold shadow-sm hover:bg-[#4a3891] transition-colors"
                        >
                            <Plus className="w-5 h-5" />
                            Choose your clubs
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

                        {followedClubs.map((club) => (
                            <div
                                key={club.id}
                                className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all aspect-square"
                            >
                                <button
                                    onClick={() => unfollow(club.id)}
                                    aria-label={`Unfollow ${club.name}`}
                                    className="absolute top-3 right-3 text-yellow-400 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity cursor-pointer"
                                >
                                    <Star className="w-5 h-5 fill-current" />
                                </button>

                                <img
                                    src={club.logo}
                                    alt={club.name}
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4"
                                />

                                <span className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[#5942AA] transition-colors text-center">
                                    {club.name}
                                </span>
                            </div>
                        ))}

                        <Link
                            to="/#follow-club-section"
                            className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-gray-200 bg-transparent text-gray-400 hover:border-[#5942AA] hover:text-[#5942AA] hover:bg-[#5942AA]/5 transition-all group aspect-square"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-[#5942AA]/10 flex items-center justify-center mb-3 transition-colors">
                                <Plus className="w-6 h-6" />
                            </div>
                            <span className="text-base font-bold">Add Club</span>
                        </Link>

                    </div>
                )}
            </div>
        </main>
    );
}