import { createBrowserRouter } from "react-router-dom";

import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import PrivateRoutes from "./components/Layout/PrivateRoutes";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "signup", element: <SignUp /> },
            { path: "contact", element: <Contact /> },
        ],
    },
    {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        element: <PrivateRoutes />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
]);

export default router;
