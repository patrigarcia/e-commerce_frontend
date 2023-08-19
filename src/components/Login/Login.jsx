import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import logo2 from "../../assets/arcade.png";
import { Box, Button, Card, FormLabel, Input, Link as ChakraLink, Spinner, Center, Flex } from "@chakra-ui/react";
import "./Login.scss";

const LoginPage = () => {
    const [isLoading, setLoading] = useState(false);
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const mail = event.currentTarget.elements[0].value;
        const password = event.currentTarget.elements[1].value;
        login({ mail, password });
    };

    useEffect(() => {
        setTimeout(() => {
            const foundToken = localStorage.getItem("token");
            if (foundToken) {
                navigate("/");
            }
        }, 2000);
    }, [login, navigate]);

    return (
        <>
            <Box className="logo-container">
                <Link to="/">
                    <img className="logo" src={logo2} width={100} alt="Logo" />
                </Link>
            </Box>
            <Center className="heading">
                <h1>Bienvenid@ de nuevo!</h1>
            </Center>
            <Box className="form-container">
                <Card className="card">
                    <form onSubmit={handleSubmit}>
                        <Box mb={4}>
                            <FormLabel className="form-label">Email</FormLabel>
                            <Input type="email" placeholder="Enter email" />
                        </Box>

                        <Box mb={4}>
                            <FormLabel className="form-label">Contraseña</FormLabel>
                            <Input type="password" placeholder="Enter password" />
                        </Box>

                        <Flex className="button-container">
                            <Button type="submit" colorScheme="purple" isLoading={isLoading} loadingText="Submitting..." width="100%" mb={4}>
                                {isLoading ? <Spinner size="sm" mr={2} /> : "Iniciar sesión"}
                            </Button>
                        </Flex>

                        <Box mb={2}>
                            <span>Aún no tienes cuenta? </span>
                            <ChakraLink as={Link} to="/register" className="link">
                                Regístrate aquí
                            </ChakraLink>
                        </Box>

                        <Box>
                            <ChakraLink as={Link} to="/" className="link">
                                O vuelve a Inicio
                            </ChakraLink>
                        </Box>
                    </form>
                </Card>
            </Box>
        </>
    );
};

export default LoginPage;
