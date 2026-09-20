import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import MatchDetails from "./pages/MatchDetails";
import CheckoutPage from "./pages/ShopingPage";
import NewsArticlePage from "./pages/NewsPage";
import TermsOfServicePage from "./pages/TermsOfService";
import PrivacyPolicyPage from "./pages/Privacy";
import FavoritesPage from "./pages/FavoritesPage";

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
        },
        {
            path: "/shop/:id",
            element: <CheckoutPage />
        },
        {
            path: "news/:id",
            element: <NewsArticlePage />
        },
        {
            path: "terms",
            element: <TermsOfServicePage />
        },
        {
            path: "privacy-policy",
            element: <PrivacyPolicyPage />
        },
        {
            path: "favorites",
            element: <FavoritesPage />
        }
    ]

}])