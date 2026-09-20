import { DataContext } from "../contexts/DataContext";
import type { TeamStats } from "../types";
import useRequiredContext from "./useRequiredContext";

const MOCK_DATA = {
  "get": "fixtures/statistics",
  "parameters": {
    "fixture": "999999999"
  },
  "errors": [],
  "results": 2,
  "paging": {
    "current": 1,
    "total": 1
  },
  "response": [
    {
      "team": {
        "id": 2,
        "name": "France",
        "logo": "https://media.api-sports.io/football/teams/2.png"
      },
      "statistics": [
        { "type": "Passes accurate", "value": 355 },
        { "type": "Shots insidebox", "value": 8 },
        { "type": "Shots outsidebox", "value": 6 },
        { "type": "Blocked Shots", "value": 2 },
        { "type": "Free Kicks", "value": 12 },
        { "type": "Shots on Goal", "value": 4 },
        { "type": "Goalkeeper Saves", "value": 0 },
        { "type": "Shots off Goal", "value": 8 },
        { "type": "Total passes", "value": 408 },
        { "type": "Total Shots", "value": 14 },
        { "type": "Yellow Cards", "value": 2 },
        { "type": "Corner Kicks", "value": 7 },
        { "type": "Offsides", "value": 4 },
        { "type": "Fouls", "value": 11 },
        { "type": "Red Cards", "value": 0 },
        { "type": "Ball Possession", "value": "49%" }
      ]
    },
    {
      "team": {
        "id": 9,
        "name": "Spain",
        "logo": "https://media.api-sports.io/football/teams/9.png"
      },
      "statistics": [
        { "type": "Passes accurate", "value": 419 },
        { "type": "Shots insidebox", "value": 6 },
        { "type": "Shots outsidebox", "value": 4 },
        { "type": "Blocked Shots", "value": 1 },
        { "type": "Free Kicks", "value": 15 },
        { "type": "Shots on Goal", "value": 2 },
        { "type": "Goalkeeper Saves", "value": 4 },
        { "type": "Shots off Goal", "value": 7 },
        { "type": "Total passes", "value": 487 },
        { "type": "Total Shots", "value": 10 },
        { "type": "Yellow Cards", "value": 1 },
        { "type": "Corner Kicks", "value": 1 },
        { "type": "Offsides", "value": 5 },
        { "type": "Fouls", "value": 12 },
        { "type": "Red Cards", "value": 0 },
        { "type": "Ball Possession", "value": "51%" }
      ]
    }
  ]
};

export default function useLiveMatchWidget() {
  const { liveMatchStats } = useRequiredContext(DataContext);

  const homeTeam: TeamStats = liveMatchStats ? liveMatchStats[0] : (MOCK_DATA.response[0] as TeamStats);
  const awayTeam: TeamStats = liveMatchStats ? liveMatchStats[1] : (MOCK_DATA.response[1] as TeamStats);

  const regExp = /[^a-zA-Z]/g;

  const normalizeStats = (team: TeamStats) => {
    if (!team?.statistics) return {};

    return Object.fromEntries(
      team.statistics.map(({ type, value }) => {
        return [type.toLowerCase().replace(regExp, ""), value ?? 0];
      })
    );
  };

  const homeStats = normalizeStats(homeTeam);
  const awayStats = normalizeStats(awayTeam);

  const WIDGET_STATS = [
    { label: "Shoot on Target", key: "shotsongoal" },
    { label: "Shoot", key: "totalshots" },
    { label: "Fouls", key: "fouls" },
  ];

  return { homeStats, awayStats, WIDGET_STATS, homeTeam, awayTeam };
}