import { Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";

const MOCK_FAVORITES = [
    {
        id: 1,
        name: "Real Madrid",
        abbr: "RMA",
        badgeColor: "bg-gray-800 text-white",
    }
];

export default function FavoritesPage() {
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

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

                    {MOCK_FAVORITES.map((club) => (
                        <div
                            key={club.id}
                            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all cursor-pointer aspect-square"
                        >
                            <button className="absolute top-3 right-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Star className="w-5 h-5 fill-current" />
                            </button>

                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl shadow-inner mb-4 ${club.badgeColor}`}>
                                {club.abbr}
                            </div>

                            <span className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[#5942AA] transition-colors text-center">
                                {club.name}
                            </span>
                        </div>
                    ))}

                    <Link to={"/#follow-club-section"} className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-gray-200 bg-transparent text-gray-400 hover:border-[#5942AA] hover:text-[#5942AA] hover:bg-[#5942AA]/5 transition-all group aspect-square">
                        <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-[#5942AA]/10 flex items-center justify-center mb-3 transition-colors">
                            <Plus className="w-6 h-6" />
                        </div>
                        <span className="text-base font-bold">Add Club</span>
                    </Link>

                </div>
            </div>
        </main>
    );
}