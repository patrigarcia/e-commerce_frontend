import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { useState, useContext, useEffect } from "react";
import { Link } from "@chakra-ui/react";
import LogoutAlert from "./LogoutAlert";

const Logout = () => {
    const [isLoading, setLoading] = useState(false);
    const { user, logout } = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        setLoading(true);
        await logout();
        setLoading(false);
    };

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, []);

    return (
        <>
            <Link pl={3} onClick={handleLogout}>
                Cerrar sesión
            </Link>
        </>
    );
};

export default Logout;
