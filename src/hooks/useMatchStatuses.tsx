export default function useMatchStatuses() {

    const finishedStatuses = ["FT", "AET", "PEN", "WO", "AWD"];
    const upcomingStatuses = ["NS", "TBD"];
    const liveStatuses = ["1H", "HT", "2H", "ET", "BT", "P", "SUSP", "INT", "LIVE"];
    const cancelledStatuses = ["CANC", "PST", "ABD", "SUSP", "INT"];


    return {finishedStatuses, upcomingStatuses, liveStatuses, cancelledStatuses};
}