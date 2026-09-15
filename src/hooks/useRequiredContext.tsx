import { useContext } from "react";


export default function useRequiredContext<T>(context: React.Context<T | null>) : T {

    const Context = useContext(context);

    if (!Context) {

        throw new Error("Context is null!!");

    }

    return Context

};
