import { describe, it, expect } from "vitest";
import type { Match } from "../types";

describe("group matches test", () => {

    it("filters only live matches", () => {
        const category = arr
            .map((matches): [string, Match[]] => {
                const filteredMatches = matches[1].filter(item => {
                    const status = item.fixture.status.short;
                    
                    return ["1H", "HT", "2H", "ET", "BT", "P", "SUSP", "INT", "LIVE"]
                        .includes(status);
                });

                return [matches[0], filteredMatches];
            })
            .filter(item => item[1].length > 0);

        debugger;
        expect(category).toHaveLength(2);

        expect(category[0][0]).toBe("12");
        // expect(category[0][0]).toBe("218");

        expect(category[0][1]).toHaveLength(1);
        expect(category[0][1][0].fixture.status.short).toBe("2H");

        expect(category[1][0]).toBe("12");
        expect(category[1][1]).toHaveLength(2);
        expect(category[1][1][0].fixture.status.short).toBe("1H");
        expect(category[1][1][1].fixture.status.short).toBe("HT");

        expect(category[2][0]).toBe("39");
        expect(category[2][1]).toHaveLength(1);
        expect(category[2][1][0].fixture.status.short).toBe("2H");
    });

})


const arr = Object.entries({
    "218": [
        {
            fixture: {
                id: 100001,
                referee: null,
                timezone: "UTC",
                date: "2026-09-13T17:30:00+00:00",
                timestamp: 1789311000,
                periods: {
                    first: null,
                    second: null
                },
                venue: {
                    id: 1761,
                    name: "Lavanttal-Arena",
                    city: "Wolfsberg"
                },
                status: {
                    long: "FT",
                    short: "FT",
                    elapsed: 82,
                    extra: null
                }
            },
            league: {
                id: 218,
                name: "Bundesliga",
                country: "Austria",
                logo: "https://media.api-sports.io/football/leagues/218.png",
                flag: "https://media.api-sports.io/flags/at.svg",
                season: 2026,
                round: "Regular Season - 6",
                standings: true
            },
            teams: {
                home: {
                    id: 1025,
                    name: "Wolfsberger AC",
                    logo: "https://media.api-sports.io/football/teams/1025.png",
                    winner: false
                },
                away: {
                    id: 781,
                    name: "Rapid Vienna",
                    logo: "https://media.api-sports.io/football/teams/781.png",
                    winner: true
                }
            },
            goals: {
                home: 0,
                away: 2
            },
            score: {
                halftime: {
                    home: 0,
                    away: 2
                },
                fulltime: {
                    home: null,
                    away: null
                },
                extratime: {
                    home: null,
                    away: null
                },
                penalty: {
                    home: null,
                    away: null
                }
            }
        }
    ],

    "12": [
        {
            fixture: {
                id: 100002,
                referee: null,
                timezone: "UTC",
                date: "2026-09-13T18:00:00+00:00",
                timestamp: 1789312800,
                periods: {
                    first: null,
                    second: null
                },
                venue: {
                    id: 2001,
                    name: "Test Stadium",
                    city: "Madrid"
                },
                status: {
                    long: "First Half",
                    short: "1H",
                    elapsed: 34,
                    extra: null
                }
            },
            league: {
                id: 12,
                name: "La Liga",
                country: "Spain",
                logo: "https://media.api-sports.io/football/leagues/12.png",
                flag: "https://media.api-sports.io/flags/es.svg",
                season: 2026,
                round: "Regular Season - 4",
                standings: true
            },
            teams: {
                home: {
                    id: 2001,
                    name: "Team A",
                    logo: "https://media.api-sports.io/football/teams/2001.png",
                    winner: null
                },
                away: {
                    id: 2002,
                    name: "Team B",
                    logo: "https://media.api-sports.io/football/teams/2002.png",
                    winner: null
                }
            },
            goals: {
                home: 1,
                away: 0
            },
            score: {
                halftime: {
                    home: null,
                    away: null
                },
                fulltime: {
                    home: null,
                    away: null
                },
                extratime: {
                    home: null,
                    away: null
                },
                penalty: {
                    home: null,
                    away: null
                }
            }
        },

        {
            fixture: {
                id: 100003,
                referee: null,
                timezone: "UTC",
                date: "2026-09-13T19:00:00+00:00",
                timestamp: 1789316400,
                periods: {
                    first: null,
                    second: null
                },
                venue: {
                    id: 2002,
                    name: "Test Stadium 2",
                    city: "Barcelona"
                },
                status: {
                    long: "Halftime",
                    short: "FT",
                    elapsed: 45,
                    extra: null
                }
            },
            league: {
                id: 12,
                name: "La Liga",
                country: "Spain",
                logo: "https://media.api-sports.io/football/leagues/12.png",
                flag: "https://media.api-sports.io/flags/es.svg",
                season: 2026,
                round: "Regular Season - 4",
                standings: true
            },
            teams: {
                home: {
                    id: 2003,
                    name: "Team C",
                    logo: "https://media.api-sports.io/football/teams/2003.png",
                    winner: null
                },
                away: {
                    id: 2004,
                    name: "Team D",
                    logo: "https://media.api-sports.io/football/teams/2004.png",
                    winner: null
                }
            },
            goals: {
                home: 1,
                away: 1
            },
            score: {
                halftime: {
                    home: 1,
                    away: 1
                },
                fulltime: {
                    home: null,
                    away: null
                },
                extratime: {
                    home: null,
                    away: null
                },
                penalty: {
                    home: null,
                    away: null
                }
            }
        }
    ],

    "39": [
        {
            fixture: {
                id: 100004,
                referee: null,
                timezone: "UTC",
                date: "2026-09-13T19:30:00+00:00",
                timestamp: 1789318200,
                periods: {
                    first: null,
                    second: null
                },
                venue: {
                    id: 3001,
                    name: "Test Stadium 3",
                    city: "London"
                },
                status: {
                    long: "Second Half",
                    short: "2H",
                    elapsed: 67,
                    extra: null
                }
            },
            league: {
                id: 39,
                name: "Premier League",
                country: "England",
                logo: "https://media.api-sports.io/football/leagues/39.png",
                flag: "https://media.api-sports.io/flags/gb.svg",
                season: 2026,
                round: "Regular Season - 5",
                standings: true
            },
            teams: {
                home: {
                    id: 3001,
                    name: "Team E",
                    logo: "https://media.api-sports.io/football/teams/3001.png",
                    winner: null
                },
                away: {
                    id: 3002,
                    name: "Team F",
                    logo: "https://media.api-sports.io/football/teams/3002.png",
                    winner: null
                }
            },
            goals: {
                home: 2,
                away: 2
            },
            score: {
                halftime: {
                    home: 1,
                    away: 1
                },
                fulltime: {
                    home: null,
                    away: null
                },
                extratime: {
                    home: null,
                    away: null
                },
                penalty: {
                    home: null,
                    away: null
                }
            }
        }
    ]
});