import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import MatchDetails from "./pages/MatchDetails";


export const router = createBrowserRouter([{

    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <MainPage />
        },
        {
            path: "/match",
            element: <MatchDetails />
        }
    ]

}])