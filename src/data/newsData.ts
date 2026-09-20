
import GOAT from "../assets/images/news/GOAT.avif";
import ARSENAL_SUNDERLAND from "../assets/images/news/arsenal-sunderland.avif";
import BARCELONA_LEVANTE from "../assets/images/news/barcelona-levante.avif";
import MU_CITY from "../assets/images/news/city-mu-match.avif";
import COVENTRY_BRIGHTON from "../assets/images/news/brigthon_coventry.avif";
import LIVERPOOL_FULHAM from "../assets/images/news/liverpool_fulham.avif";
import CHELSEA_HULL from "../assets/images/news/chelsea_hull.avif";
import LEIPZIG_HAM from "../assets/images/news/leipzig_hamburg.avif";
import JAMES_MC_ATEE from "../assets/images/news/james_mc_atee.jpg";
import TOTENHAM_EVERTON from "../assets/images/news/totenham_everton.avif";
import DIOMANDE_REAL from "../assets/images/news/diomande_real.jpg";
import ENZO_CITY from "../assets/images/news/enzo_city.avif";
import BARCOLA_LIVERPOOL from "../assets/images/news/barcola_liverpool.avif";
import GABRIEL_JESUS_BARCA from "../assets/images/news/gabriel_jesus_barcelona.avif";
import BAYERN_BODO from "../assets/images/news/bayern_bodo.avif";
import MU_CITY_REFEREE from "../assets/images/news/mu_city_referee.avif";
import JOSE_REAL from "../assets/images/news/jose_real.avif";
import BOURNEMOUTH from "../assets/images/news/bournemouth.avif";
import ADEYEMI_BARCELONA from "../assets/images/news/adeyemi-barca.avif";
import REAL_RAYO from "../assets/images/news/real-madrid-rayo.avif";
import VICTOR_MUNOZ_LIVERPOOL from "../assets/images/news/victor_munoz_liverpool.avif";
import ARDA_REAL_MADRID from "../assets/images/news/arda_guler.avif";
import type { News } from "../types";

export const NEWS_DATA: News[] = [
    {
        id: 1,
        type: "hot",
        category: "WORLD FOOTBALL",
        title: "Cristiano Ronaldo closes in on historic 1,000-goal milestone",
        description:
            "Cristiano Ronaldo has reached 979 career goals and now needs just 21 more to reach the historic 1,000-goal mark.",
        img: GOAT,
    },
    {
        id: 2,
        type: "hot",
        category: "PREMIER LEAGUE",
        title: "Arsenal maintain perfect start with victory over Sunderland",
        description:
            "Arsenal continued their perfect league campaign with a 2-0 win away from home, keeping pace at the top of the table.",
        img: ARSENAL_SUNDERLAND,
    },
    {
        id: 3,
        type: "news",
        category: "LA LIGA",
        title: "Barcelona keep perfect record after thrilling win over Levante",
        description:
            "Barcelona remained perfect in the league after a hard-fought 4-2 victory, with Lamine Yamal again playing a key role.",
        img: BARCELONA_LEVANTE,
    },
    {
        id: 4,
        type: "hot",
        category: "PREMIER LEAGUE",
        title: "Ten-man Manchester City win dramatic derby at Old Trafford",
        description:
            "Manchester City defeated United 1-0 despite playing with ten men for more than an hour, with Erling Haaland scoring the decisive goal.",
        img: MU_CITY,
    },
    {
        id: 5,
        type: "news",
        category: "PREMIER LEAGUE",
        title: "Brighton destroy Coventry with five-goal performance",
        description:
            "Brighton produced one of the weekend's biggest results with a dominant 5-0 victory over Coventry City.",
        img: COVENTRY_BRIGHTON,
    },
    {
        id: 6,
        type: "news",
        category: "PREMIER LEAGUE",
        title: "Liverpool frustrated by Fulham in goalless draw",
        description:
            "Liverpool were unable to break down Fulham's defence as the two sides played out a 0-0 draw at Anfield.",
        img: LIVERPOOL_FULHAM,
    },
    {
        id: 7,
        type: "hot",
        category: "PREMIER LEAGUE",
        title: "Chelsea drop more points after 2-2 draw with Hull",
        description:
            "Chelsea were held to a 2-2 draw at Stamford Bridge as Hull continued their impressive start to the Premier League season.",
        img: CHELSEA_HULL,
    },
    {
        id: 8,
        type: "news",
        category: "BUNDESLIGA",
        title: "RB Leipzig crush Hamburg in five-goal Bundesliga display",
        description:
            "RB Leipzig delivered a commanding 5-0 victory over Hamburg with an attacking performance that never allowed their opponents into the game.",
        img: LEIPZIG_HAM,
    },
    {
        id: 9,
        type: "hot",
        category: "PREMIER LEAGUE",
        title: "James McAtee shines as Nottingham Forest beat Aston Villa",
        description:
            "The Manchester City academy graduate impressed in Forest's 2-1 victory over Aston Villa and continues to establish himself at his new club.",
        img: JAMES_MC_ATEE,
    },
    {
        id: 10,
        type: "news",
        category: "PREMIER LEAGUE",
        title: "Tottenham held to another goalless draw",
        description:
            "Tottenham's attacking problems continued as Everton secured a point in a frustrating 0-0 draw.",
        img: TOTENHAM_EVERTON,
    },
    {
        id: 11,
        type: "transfer",
        category: "TRANSFER",
        title: "Real Madrid sign Yan Diomande from RB Leipzig",
        description:
            "Real Madrid have signed 19-year-old winger Yan Diomande from RB Leipzig in a deal worth up to €140m, including €125m in fixed fees and €15m in bonuses.",
        img: DIOMANDE_REAL,
    },
    {
        id: 12,
        type: "transfer",
        category: "TRANSFER",
        title: "Manchester City sign Enzo Fernandez from Chelsea",
        description:
            "Manchester City have completed the signing of Enzo Fernandez from Chelsea for £125m, with the Argentine midfielder signing a five-year contract.",
        img: ENZO_CITY,
    },
    {
        id: 13,
        type: "transfer",
        category: "TRANSFER",
        title: "Liverpool sign Bradley Barcola from PSG",
        description:
            "Liverpool have completed the signing of Bradley Barcola from Paris Saint-Germain for an initial £106m, with the deal potentially rising to £123m with add-ons.",
        img: BARCOLA_LIVERPOOL,
    },
    {
        id: 14,
        type: "transfer",
        category: "TRANSFER",
        title: "Barcelona sign Gabriel Jesus from Arsenal",
        description:
            "Barcelona have completed the signing of Gabriel Jesus from Arsenal for €10m plus up to €5m in add-ons, with the Brazilian striker signing a contract until 2029.",
        img: GABRIEL_JESUS_BARCA,
    },
    {
        id: 15,
        type: "news",
        category: "CHAMPIONS LEAGUE",
        title: "Bayern Munich demolish Bodø/Glimt 5-0 in Champions League opener",
        description:
            "Bayern Munich made a flying start to their Champions League campaign with a 5-0 win over Bodø/Glimt, with goals from Jamal Musiala, Harry Kane, Alphonso Davies and Michael Olise.",
        img: BAYERN_BODO,
    },
    {
        id: 16,
        type: "hot",
        category: "PREMIER LEAGUE",
        title: "Refereeing controversy dominates reaction to Manchester derby",
        description:
            "The red card and several major decisions from the Manchester derby have sparked widespread debate among fans and pundits.",
        img: MU_CITY_REFEREE,
    },
    {
        id: 17,
        type: "news",
        category: "LA LIGA",
        title: "Arda Güler emerges as Europe's most creative playmaker",
        description:
            "The Real Madrid star leads the top five European leagues in chances created per 90 minutes (3.68), becoming Madrid's primary creative outlet.",
        img: ARDA_REAL_MADRID,
    },
    {
        id: 18,
        type: "hot",
        category: "CONTROVERSY",
        title: "Mourinho blasts Real Madrid star over off-field issues",
        description:
            "Jose Mourinho has criticised Raul Asencio over his off-field controversies, saying he is 'not happy' with the defender's repeated mistakes. Real Madrid have also opened a disciplinary case against the player.",
        img: JOSE_REAL,
    },
    {
        id: 19,
        type: "news",
        category: "PREMIER LEAGUE",
        title: "Bournemouth remain winless despite positive performances",
        description:
            "Bournemouth are still searching for their first league victory despite showing promising attacking football in their opening matches.",
        img: BOURNEMOUTH,
    },
    {
        id: 20,
        type: "transfer",
        category: "TRANSFER",
        title: "Barcelona complete €22m signing of Karim Adeyemi from Dortmund",
        description:
            "The German forward has officially signed a contract until 2031 at Camp Nou, reuniting with Hansi Flick.",
        img: ADEYEMI_BARCELONA,
    },
    {
        id: 21,
        type: "news",
        category: "LA LIGA",
        title: "Real Madrid cruise past Rayo Vallecano with 4-1 victory",
        description:
            "Real Madrid continued their strong start to the season with a convincing 4-1 victory over Rayo Vallecano, keeping their title challenge on track.",
        img: REAL_RAYO,
    },
    {
        id: 22,
        type: "transfer",
        category: "TRANSFER",
        title: "Liverpool complete £34m deal for Osasuna forward Víctor Muñoz",
        description:
            "The Reds have confirmed the arrival of Spanish attacker Víctor Muñoz to add depth and creativity to the frontline.",
        img: VICTOR_MUNOZ_LIVERPOOL,
    },
];