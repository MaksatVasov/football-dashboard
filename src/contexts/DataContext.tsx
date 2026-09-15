import { createContext, useEffect, useState } from "react";
import type { Tables, League, Data, DataContextType, ServerResponseStandings, LeagueMatches} from "../types";

export const DataContext = createContext<DataContextType | null>(null);

export default function DataProvider({ children }: { children: React.ReactNode }) {
  const [isLoadingData, setLoadingData] = useState(true);

  const [data, setData] = useState<LeagueMatches | null>(null);

  

  const [leagueID, setLeagueID] = useState(39);
  const [leagueTables, setLeagueTables] = useState<Tables>({});
  const [curTable, setCurTable] = useState<League | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const getTables = async () => {
      if (leagueTables[leagueID]) {
        setCurTable(leagueTables[leagueID]);
        setLoadingData(false);
        return;
      }

      setLoadingData(true);

      try {
        const request = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueID}&season=2024`, {
          headers: {
            'x-apisports-key': "fa2af5dfb7f58f0dfe31a66637ec8a94"
          },
          signal: controller.signal
        });

        if (!request.ok) {
          throw new Error("error occured");
        }

        const response: ServerResponseStandings = await request.json();

        if (response.errors && Object.keys(response.errors).length > 0) {
          const errorMessage = Object.values(response.errors).join(", ");
          throw new Error(errorMessage || "API request failed");
        }

        if (!response.response || response.response.length === 0) {
          throw new Error("No standings data found for this league");
        }

        const tableData = response.response[0].league;

        setLeagueTables(prev => ({
          ...prev,
          [leagueID]: tableData
        }));

        setCurTable(tableData);

      } catch (error) {

        if (error instanceof Error) {
          if (error.name === "AbortError") return;

        }

        console.error(error);
      } finally {
        setLoadingData(false);
      }
    };

    getTables();

    return () => controller.abort();
  }, [leagueID]);

  useEffect(() => {
    // if (data) return;

    const controller = new AbortController();

    const getMatches = async () => {
      const today = new Date().toLocaleDateString("en-CA");

      console.log(today, "sdasdsdadahdasjhdasjdhasdadjadhasjdashjdhasjhashasdjahdashd");
      try {
        const request = await fetch(`https://v3.football.api-sports.io/fixtures?date=${today}`, {
          headers: {
            'x-apisports-key': "fa2af5dfb7f58f0dfe31a66637ec8a94"
          },
          signal: controller.signal
        });

        if (!request.ok) {
          throw new Error("Error happened. Try later!");
        }

        const response: Data = await request.json();

        // localStorage.setItem("matches", JSON.stringify(response));
        console.log(response, "response")

        const leagueFilteredResponse: LeagueMatches = response.response.reduce((acc: LeagueMatches, curr) => {
          const leagueNumber = curr.league.id;
          if (leagueNumber in acc) {
            acc[leagueNumber].push(curr);
          } else {
            acc[leagueNumber] = [curr];
          }

          return acc

        }, {});

        console.log(leagueFilteredResponse)


        setData(leagueFilteredResponse);

      } catch (error) {

        if (error instanceof Error) {
          if (error.name === "AbortError") return;
        }
        console.error(error);
      }
    };

    getMatches();

    return () => controller.abort();
  }, []);


  return (
    <DataContext.Provider value={{ isLoadingData, data, setData, setLeagueID, setLeagueTables, leagueTables, curTable}}>
      {children}
    </DataContext.Provider>
  );
}