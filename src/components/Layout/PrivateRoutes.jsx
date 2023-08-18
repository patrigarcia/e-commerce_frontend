import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import Layout from "./Layout";

const PrivateRoutes = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    if (!user) return <Navigate to="/login" />;

    return <Layout />;
};

export default PrivateRoutes;
