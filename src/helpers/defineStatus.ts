import useMatchStatuses from "../hooks/useMatchStatuses";
import type { Match } from "../types";

export function defineMatchStatus(match: Match) {
    const status = match.fixture.status.short;

    const { liveStatuses, cancelledStatuses, upcomingStatuses } = useMatchStatuses();

    const objOfStatuses = {
        isLive: false,
        isCancelled: false,
        isUpcoming: false,
        status: ""
    };

    const isLive = liveStatuses.includes(status.toUpperCase());
    const isCancelled = cancelledStatuses.includes(status.toUpperCase());
    const isUpcoming = upcomingStatuses.includes(status.toUpperCase());

    if (isLive) {
        const { elapsed, extra } = match.fixture.status;

        const baseElapsed = elapsed ?? (match.fixture.periods.second ? 90 : 45);

        objOfStatuses.isLive = true;
        objOfStatuses.status = extra ? `${baseElapsed}+${extra}` : `${baseElapsed}`;

        return objOfStatuses;
    }

    if (isCancelled) {
        objOfStatuses.isCancelled = true;
        objOfStatuses.status = status;

        return objOfStatuses;
    }

    if (isUpcoming) {
        objOfStatuses.isUpcoming = true;
    }

    objOfStatuses.status = status;

    return objOfStatuses;
}