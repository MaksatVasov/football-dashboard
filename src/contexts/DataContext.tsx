import { createContext, useEffect, useState } from "react";
import type { Tables, League, Data, DataContextType, ServerResponseStandings, LeagueMatches, TeamStats } from "../types";

export const DataContext = createContext<DataContextType | null>(null);

export default function DataProvider({ children }: { children: React.ReactNode }) {
  const [isLoadingData, setLoadingData] = useState(true);
  const [data, setData] = useState<LeagueMatches | null>(null);

  const [leagueID, setLeagueID] = useState(39);
  const [leagueTables, setLeagueTables] = useState<Tables>({});
  const [curTable, setCurTable] = useState<League | null>(null);

  const [liveMatchID, setLiveMatchID] = useState("999999999");
  const [liveMatchStats, setLiveMatchStats] = useState<TeamStats[] | null>(null);

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
            'x-apisports-key': import.meta.env["VITE_FOOTBALL_API_KEY"]
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
    const controller = new AbortController();

    const getMatches = async () => {
      const today = new Date().toLocaleDateString("en-CA");

      try {
        const request = await fetch(`https://v3.football.api-sports.io/fixtures?date=${today}`, {
          headers: {
            'x-apisports-key': import.meta.env["VITE_FOOTBALL_API_KEY"]
          },
          signal: controller.signal
        });

        if (!request.ok) {
          throw new Error("Error happened. Try later!");
        }

        const response: Data = await request.json();

        const leagueFilteredResponse: LeagueMatches = response.response.reduce((acc: LeagueMatches, curr) => {
          const leagueNumber = curr.league.id;
          if (leagueNumber in acc) {
            acc[leagueNumber].push(curr);
          } else {
            acc[leagueNumber] = [curr];
          }
          return acc;
        }, {});

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

  useEffect(() => {
    if (liveMatchID === "999999999") return;

    const controller = new AbortController(); 
    
    const getMatchForWidget = async () => {
      try {
        const request = await fetch(
          `https://v3.football.api-sports.io/fixtures/statistics?fixture=${liveMatchID}`,
          {
            headers: {
              'x-apisports-key': import.meta.env["VITE_FOOTBALL_API_KEY"] 
            },
            signal: controller.signal
          }
        );

        if (!request.ok) throw new Error("Couldn't get match details");

        const data = await request.json();
        console.log(liveMatchID);
        if (data.response && data.response.length > 0) {
          setLiveMatchStats(data.response);
        } else {
          setLiveMatchStats(null);
        }

      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return; 
        }
        console.error(error);
      }
    };

    getMatchForWidget();

    return () => {
      controller.abort();
    };
  }, [liveMatchID]);

  return (
    <DataContext.Provider value={{ isLoadingData, data, setData, setLeagueID, setLeagueTables, leagueTables, curTable, setLiveMatchID, liveMatchStats }}>
      {children}
    </DataContext.Provider>
  );
}