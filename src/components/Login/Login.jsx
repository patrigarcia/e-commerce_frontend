import { useContext, useEffect, useState } from "react";
import { useNavigate, Link, Form } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { Box, Button, Card, FormLabel, Input, Link as ChakraLink, Spinner, Center, Flex, Image, Grid, Text } from "@chakra-ui/react";

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
            <Grid className="container_grid" h="100vh" templateColumns="repeat(2, 1fr)">
                <Box>
                    <Link to="/">
                        <Image w="70%" ml="10%" mt="15%" src="src/assets/login.png" />
                    </Link>
                </Box>
                <Box w="60%">
                    <Card p="4%" mt="40%">
                        <Center>
                            <Text as="b" p="4%" fontSize="1.2em">
                                Bienvenid@ de nuevo!
                            </Text>
                        </Center>
                        <Form onSubmit={handleSubmit}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Enter email" required />

                            <FormLabel pt="6%">Contraseña</FormLabel>
                            <Input type="password" placeholder="Enter password" required />

                            <Button type="submit" colorScheme="purple" isLoading={isLoading} loadingText="Iniciando sesión..." width="100%" mt="6%" mb="4%">
                                {isLoading ? <Spinner size="sm" mr={2} /> : "Iniciar sesión"}
                            </Button>

                            <Text as="b">Aún no tienes cuenta? </Text>
                            <ChakraLink as={Link} color="pink.500" to="/signup">
                                <Text as="b"> Regístrate aquí</Text>
                            </ChakraLink>

                            <ChakraLink as={Link} to="/" color="blue.600">
                                <Text as="b">
                                    {" "}
                                    <br /> O vuelve a Inicio
                                </Text>
                            </ChakraLink>
                        </Form>
                    </Card>
                </Box>
            </Grid>
        </>
    );
};

export default LoginPage;
