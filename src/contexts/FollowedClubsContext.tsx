import { createContext, useEffect, useState } from "react";
import { isTeam, type FollowedClubs, type FollowedClubsContextType } from "../types";

export const FollowedClubsContext = createContext<FollowedClubsContextType | null>(null)

export default function FollowedClubsProvider({ children }: { children: React.ReactNode }) {

    const [followedClubs, setFollowClub] = useState<FollowedClubs>((): FollowedClubs => {
        try {
            const parsed: unknown = JSON.parse(localStorage.getItem("followed_clubs") ?? "[]");

            if (Array.isArray(parsed) && parsed.every(isTeam)) {
                return parsed;
            }
            return [];
        } catch {
            return [];
        }
    });

    useEffect(() => {

        localStorage.setItem("followed_clubs", JSON.stringify(followedClubs));

    }, [followedClubs])


    return (
        <FollowedClubsContext.Provider value={{ followedClubs, setFollowClub }}>
            {children}
        </FollowedClubsContext.Provider>
    )
}