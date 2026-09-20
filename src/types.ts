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
    id: number,
    logo: string,
    name: string
}

export type FollowedClubs = number[];


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
    setIsRateLimited: React.Dispatch<React.SetStateAction<boolean>>

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