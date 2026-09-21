export interface ServerResponseStandings {

    get: string,
    parameters: {
        league: string,
        season: string
    },
    errors: string[],
    result: number,
    pagging: {
        current: number,
        total: number
    },
    response: LeagueStandings[]

}

export interface LeagueStandings {
    league: League
}

export interface Tables {
    [leagueID: number]: League
};

export interface LeagueMatches {

    [leagueId: string]: Match[]

}

export interface Standing {
    rank: number,
    team: Team,
    points: number,
    all: AllGames,
    form: string,
}

export interface League {
    country: string,
    name: string,
    flag: string,
    id: number,
    logo: string,
    season: number,
    standings: Standing[][] | boolean
}

interface AllGames {
    played: number,
    win: number,
    draw: number,
    lose: number,
}

export interface Team {
    id: number;
    logo: string;
    name: string;
}

export type FollowedClubs = Team[];

export const isTeam = (item: unknown): item is Team => {
    if (typeof item !== "object" || item === null) return false;

    const team = item as Record<string, unknown>;
    return (
        typeof team['id'] === "number" &&
        typeof team['logo'] === "string" &&
        typeof team['name'] === "string"
    );
};


export interface Data {
    errors: {
        [key: string]: string
    }
    response: Match[]

}

export interface DataStats {
    errors: {
        [key: string]: string
    }
    response: TeamStats[];
}

export interface Fixture {

    id: number,
    status: {
        short: string,
        elapsed: null | number,
        extra: null | number
    },
    date: string,
    periods: {
        first: number | null,
        second: number | null
    }

}

export interface Match {

    fixture: Fixture,
    teams: {
        home: FixtureTeam,
        away: FixtureTeam
    },
    goals: {
        home: number,
        away: number
    },
    league: League

}

export type GroupedMatchList = Match[];

export interface FixtureTeam {
    id: number,
    name: string,
    logo: (string | null),
    winner: (boolean | null)

}

export interface DataContextType {

    isLoadingData: boolean,
    data: LeagueMatches | null,
    setData: React.Dispatch<React.SetStateAction<LeagueMatches | null>>,
    setLeagueID: React.Dispatch<React.SetStateAction<number>>,
    setLeagueTables: React.Dispatch<React.SetStateAction<Tables>>,
    leagueTables: Tables,
    curTable: League | null,
    setLiveMatchID: React.Dispatch<React.SetStateAction<string>>,
    liveMatchStats: TeamStats[] | null,
    liveMatchID: string,
    setLoadingDetails: React.Dispatch<React.SetStateAction<boolean>>,
    isLoadingDetails: boolean,
    isRateLimited: boolean,
    setIsRateLimited: React.Dispatch<React.SetStateAction<boolean>>,
    activeMatch: Match | null,
    setActiveMatch: React.Dispatch<React.SetStateAction<Match | null>>

}

export interface FollowedClubsContextType {

    followedClubs: FollowedClubs,
    setFollowClub: React.Dispatch<React.SetStateAction<FollowedClubs>>

}

export interface News {
    id: number,
    type: "news" | "hot" | "transfer",
    category: string,
    title: string,
    description: string,
    img: string
}

export interface leaguesObjType {

    [leagueId: number]: Match[]

}

export interface TeamStats {
    team: {
        id: number;
        name: string;
        logo: string;
    };
    statistics: ({
        type: string;
        value: number;
    } | {
        type: string;
        value: string;
    })[];
}

export interface FixtureEvent {
    time: { elapsed: number; extra: number | null };
    team: Team;
    player: { id: number | null; name: string | null };
    assist?: { id: number | null; name: string | null } | undefined;
    type: string;
    detail: string;
}

export interface LineupPlayer {
    id: number;
    name: string;
    number: number;
    pos: string;         
    grid: string | null; 
}

export interface Lineup {
    team: Team;
    formation: string | null;
    startXI: { player: LineupPlayer }[];
    substitutes: { player: LineupPlayer }[];
}

export interface MatchPlayers {
    team: Team;
    players: {
        player: { id: number; name: string; photo: string };
        statistics: { games: { rating: string | null } }[];
    }[];
}

export interface FixtureDetails {
    fixture: Fixture & {
        venue: { name: string | null; city: string | null };
    };
    teams: { home: Team; away: Team };
    goals: { home: number | null; away: number | null };
    events: FixtureEvent[];
    lineups: Lineup[];
    statistics: TeamStats[];
    players: MatchPlayers[];
}