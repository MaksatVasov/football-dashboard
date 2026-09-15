import { useState } from "react";
import useRequiredContext from "./useRequiredContext";
import { DataContext } from "../contexts/DataContext";

export default function useStandings() {

    const [isOpen, setOpen] = useState(false);

    const { setLeagueID, setLeagueTables, leagueTables, curTable } = useRequiredContext(DataContext);
    
    return { isOpen, setOpen, setLeagueID, setLeagueTables, leagueTables, curTable };

}