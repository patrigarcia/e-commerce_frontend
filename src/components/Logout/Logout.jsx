import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { useState, useContext, useEffect } from "react";
import { Link, useToast } from "@chakra-ui/react"; // Importa useToast

const Logout = () => {
    const [isLoading, setLoading] = useState(false);
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const toast = useToast(); // Inicializa el hook useToast

    const handleLogout = async () => {
        setLoading(true);
        await logout();
        setLoading(false);

        // Mostrar toast al desconectar exitosamente
        toast({
            title: "Desconectado con éxito",
            description: "Vuelve pronto :)",
            status: "success",
            duration: 5000,
            isClosable: true,
        });

        // Redirigir a la página de inicio
        navigate("/");
    };

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, []);

    return (
        <>
            <Link onClick={handleLogout}>Logout</Link>
        </>
    );
};

export default Logout;
