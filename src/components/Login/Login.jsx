import { Box, Button, Checkbox, Container, FormControl, FormLabel, Heading, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PasswordField from "./PasswordField";

const Login = () => (
    <Container
        maxW="lg"
        py={{
            base: "12",
            md: "24",
        }}
        px={{
            base: "0",
            sm: "8",
        }}
    >
        <Stack spacing="8">
            <Stack spacing="6">
                <Stack
                    spacing={{
                        base: "2",
                        md: "3",
                    }}
                    textAlign="center"
                >
                    <Heading
                        size={{
                            base: "xs",
                            md: "sm",
                        }}
                    >
                        Inicia sesión en Arcade
                    </Heading>
                    <Text color="fg.muted">
                        Aún no tienes cuenta? <Link to="/signup">Regístrate</Link>
                    </Text>
                </Stack>
            </Stack>
            <Box
                py={{
                    base: "0",
                    sm: "8",
                }}
                px={{
                    base: "4",
                    sm: "10",
                }}
                bg={{
                    base: "transparent",
                    sm: "bg.surface",
                }}
                boxShadow={{
                    base: "none",
                    sm: "md",
                }}
                borderRadius={{
                    base: "none",
                    sm: "xl",
                }}
            >
                <Stack spacing="6">
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input id="email" type="email" />
                        </FormControl>
                        <PasswordField />
                    </Stack>
                    <HStack justify="space-between">
                        <Checkbox defaultChecked>Recordarme</Checkbox>
                    </HStack>
                    <Stack spacing="6">
                        <Button colorScheme="purple">Iniciar sesión</Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </Container>
);

export default Login;
