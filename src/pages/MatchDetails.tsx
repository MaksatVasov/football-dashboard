import MatchScoreboard from "../components/MatchScoreBoard";
import MotmSection from "../components/MotmSection";
import GraphicPerformance from "../components/GraphicPerformance";
import TeamFormation from "../components/TeamFormation";
import TeamStatistic from "../components/TeamStatistic";
import TeamLineUp from "../components/TeamLineUp";

export default function MatchDetails() {
    return (
        <main className="max-w-full mt-1.5 mx-auto p-5 lg:max-w-[100rem]">
            <MatchScoreboard />

            <MotmSection />

            <section className="flex flex-col gap-6 md:flex-row">
                <GraphicPerformance />
                <TeamStatistic />
            </section>
            <div className="flex flex-col gap-5 w-full overflow-hidden">
                
                <TeamFormation />

                
                <TeamLineUp />
            </div>



        </main>
    );
}