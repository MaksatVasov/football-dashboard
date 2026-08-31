import { useContext, useMemo, useState } from "react";
import { DataContext } from "../contexts/DataContex";

const TABS = ["Latest Match", "Live Games", "Coming Match"];

const objOfArr = {
    "Latest Match": (item) => {

        const status = item.fixture.status.short;

        return ["FT", "AET", "PEN", "WO", "AWD"].includes(status);

    },
    "Live Games": (item) => {

        const status = item.fixture.status.short;

        return ["1H", "HT", "2H", "ET", "BT", "P", "SUSP", "INT", "LIVE"].includes(status);

    },
    "Coming Match": (item) => {

        const status = item.fixture.status.short;

        return ["NS", "TBD"].includes(status);

    }
};

function reduceCallBack(acc, curr) {



    const league = curr.league.id;

    if (acc[league]) {
        acc[league].push(curr);
    } else {
        acc[league] = [curr];
    }

    return acc;

}

export default function useFootballMatches() {

    const [activeTab, setActiveTab] = useState(TABS[1]);
    const { data } = useContext(DataContext);
    const [curPagination, setPagination] = useState(10);

    const curCategory = useMemo(() => data?.response?.filter(objOfArr[activeTab]), [data, activeTab]);

    const leaguesObj = useMemo(() => {

        if (!curCategory) {
            return {};
        }


        const pagination = curCategory.slice(0, curPagination);
        return pagination.reduce(reduceCallBack, {});


        // return curCategory.reduce(reduceCallBack, {});

    }, [curCategory, curPagination]);

    const renderReadyMatches = Object.entries(leaguesObj);
    // console.log(renderReadyMatches);

    return { activeTab, setActiveTab, renderReadyMatches, TABS, setPagination, curPagination, curCategory };


}