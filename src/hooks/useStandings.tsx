import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContex";


export default function useStandings() {

    const [isOpen, setOpen] = useState(false);

    const { setLeagueID, setLeagueTables, leagueTables, leagueID, curTable } = useContext(DataContext);

    const curLeague = leagueTables[leagueID];



    return { isOpen, setOpen, setLeagueID, setLeagueTables, curLeague, leagueTables, curTable };

}