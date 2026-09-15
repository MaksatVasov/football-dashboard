import { createContext, useEffect, useState } from "react";
import type { FollowedClubs, FollowedClubsContextType } from "../types";

export const FollowedClubsContext = createContext<FollowedClubsContextType | null>(null)

export default function FollowedClubsProvider({ children }: { children: React.ReactNode }) {

    const [followedClubs, setFollowClub] = useState<FollowedClubs>((): FollowedClubs => {

        let followedClubs;
        try {
            followedClubs = JSON.parse(localStorage.getItem("followed_clubs") ?? "[]");
            if (Array.isArray(followedClubs) && followedClubs.every((item) => typeof item === "number")) {
                return followedClubs;
            }
            return [];
        } catch (error) {
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