import { useMemo, useState } from "react";
import type { Match } from "../types";

import useRequiredContext from "./useRequiredContext";
import { DataContext } from "../contexts/DataContext";
const TABS = ["Latest Match", "Live Games", "Coming Match"] as const;

const objOfArr = {
    "Latest Match": (item: Match) => {

        const status = item.fixture.status.short;

        return ["FT", "AET", "PEN", "WO", "AWD"].includes(status);

    },
    "Live Games": (item: Match) => {

        const status = item.fixture.status.short;

        return ["1H", "HT", "2H", "ET", "BT", "P", "SUSP", "INT", "LIVE"].includes(status);

    },
    "Coming Match": (item: Match) => {

        const status = item.fixture.status.short;

        return ["NS", "TBD"].includes(status);

    }
};

// function reduceCallBack(acc: leaguesObjType, curr: Match) {



//     const league = curr.league.id;

//     if (acc[league]) {
//         acc[league].push(curr);
//     } else {
//         acc[league] = [curr];
//     }

//     return acc;

// }



export default function useFootballMatches() {
    // <"Latest Match" | "Live Games" | "Coming Match">
    const [activeTab, setActiveTab] = useState<"Latest Match" | "Live Games" | "Coming Match">(TABS[1]);
    const { data } = useRequiredContext(DataContext);
    const [curPagination, setPagination] = useState(10);

    const curCategory = useMemo(() => {



        const cycleReadyArr = Object.entries((data) ? data : {});
        console.log(cycleReadyArr, "cycle ready");

        // const category = cycleReadyArr?.filter(objOfArr[activeTab])
        const category = cycleReadyArr.map((matches): [string, Match[]] => {

            const filteredMatches = matches[1].filter(objOfArr[activeTab]);

            return [matches[0], filteredMatches]
        }).filter((item) => item[1].length > 0);

        if (category) {
            return category
        } else {
            return [];
        }

    }, [data, activeTab]);

    console.log(`Текущая категория:`, curCategory);

    // const leaguesObj = useMemo(() => {

    //     const pagination = curCategory.slice(0, curPagination);
    //     return pagination.reduce(reduceCallBack, {});


    // }, [curCategory, curPagination]);

    // console.log(leaguesObj)

    const renderReadyMatches = curCategory.slice(0, curPagination);

    // console.log(`Матчи готовые к рендеру:`, renderReadyMatches);
    // console.log(renderReadyMatches);

    return { activeTab, setActiveTab, renderReadyMatches, TABS, setPagination, curPagination, curCategory };


}