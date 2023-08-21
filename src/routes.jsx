import { createBrowserRouter } from "react-router-dom";

import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import PrivateRoutes from "./components/Layout/PrivateRoutes";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";
import Cart from "./components/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "signup", element: <SignUp /> },
            { path: "contact", element: <Contact /> },
            { path: "cart", element: <Cart /> },
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
            {
                path: "admin",
                element: <Admin />,
            },
        ],
    },
]);

export default router;
