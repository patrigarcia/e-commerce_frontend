import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import logo from "../../assets/arcade.png";
import { Box, Button, Card, FormLabel, Input, Link as ChakraLink, Spinner, Center, Flex } from "@chakra-ui/react";

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
            <Box display="flex" alignItems="center" justifyContent="flex-start" p={4}>
                <Link to="/">
                    <img className="logo" src={logo} width={100} />
                </Link>
                <Center mt={4} mb={4} style={{ textAlign: "center" }}>
                    <h1>Bienvenid@ de nuevo!</h1>
                </Center>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
                <Card p={8} boxShadow="md" borderRadius="md">
                    <form onSubmit={handleSubmit}>
                        <Box mb={4}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Enter email" />
                        </Box>

                        <Box mb={4}>
                            <FormLabel>Contraseña</FormLabel>
                            <Input type="password" placeholder="Enter password" />
                        </Box>

                        <Flex direction="column" alignItems="flex-start">
                            <Button type="submit" colorScheme="purple" isLoading={isLoading} loadingText="Submitting..." width="100%" mb={4}>
                                {isLoading ? <Spinner size="sm" mr={2} /> : "Iniciar sesión"}
                            </Button>
                        </Flex>

                        <Box mb={2}>
                            <span>Aún no tienes cuenta? </span>
                            <ChakraLink as={Link} to="/register">
                                Regístrate aquí
                            </ChakraLink>
                        </Box>

                        <Box>
                            <ChakraLink as={Link} to="/">
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
