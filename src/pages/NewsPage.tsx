import { useParams, Navigate } from "react-router-dom";
import { NEWS_DATA } from "../data/newsData";

export default function NewsArticlePage() {
    const { id } = useParams<{ id: string }>();

    const article = NEWS_DATA.find((item) => String(item.id) === id);

    if (!article) {
        return <Navigate to="/" replace />;
    }

    return (
        <main className="w-full lg:max-w-5xl mx-auto min-h-screen bg-white rounded-none lg:rounded-2xl mt-0 lg:mt-6 mb-10 pb-16 shadow-sm border border-transparent lg:border-gray-100/50">
            <div className="w-full mx-auto px-6 pt-8 lg:px-12 lg:pt-12 animate-in fade-in duration-300">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-extrabold text-[#5942AA] uppercase tracking-wider bg-[#5942AA]/10 px-3 py-1 rounded-full">
                            {article.category}
                        </span>
                        {article.type === "hot" && (
                            <span className="bg-red-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                Hot
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                        {article.title}
                    </h1>

                    <div className="w-full aspect-21/9 md:aspect-video rounded-3xl overflow-hidden bg-[#F8F9FA] my-2 shadow-sm border border-gray-50">
                        <img
                            src={article.img}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-6 mt-2">
                        <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
                            {article.description}
                        </p>

                        <div className="h-px w-full bg-gray-100 my-4"></div>

                        <div className="text-gray-500 text-base leading-relaxed space-y-4">
                            <p>
                                Details of this story are still developing. Stay tuned for more updates and comprehensive coverage as new information becomes available.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}