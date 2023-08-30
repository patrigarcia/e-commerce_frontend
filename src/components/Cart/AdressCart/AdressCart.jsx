import React, { useState, useContext } from "react";
import { Box, Button, Input, FormControl, FormLabel, Textarea, Heading, Alert, AlertIcon, Grid, Flex, Card, Center } from "@chakra-ui/react";
import { UserContext } from "../../../context/UserContext/UserState";
import apiClient from "../../../api/apiClient";

const AdressCart = ({ selection, updateAddress }) => {
    const { user } = useContext(UserContext);
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [other, setOther] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await apiClient.post("/adresses", {
                idUser: user.id,
                street,
                number,
                zipcode,
                city,
                other,
            });

            if (response.status === 201) {
                setMessage("Dirección creada con éxito");
                setError("");
                selection();
                updateAddress();
            } else {
                setError("Error al crear la dirección");
                setMessage("");
            }
        } catch (error) {
            setError("Tienes que cargar una dirección");
            setMessage("");
        }
    };

    return (
        <>
            <Center ml="5vh">
                <Card w="55vh" h="fit-content" mt="10vh" mb="5vh" p="4%">
                    <Heading as="h2" size="md" mb={4}>
                        Ingresa tu dirección:
                    </Heading>
                    {error && (
                        <Alert status="error" mb={4}>
                            <AlertIcon />
                            {error}
                        </Alert>
                    )}
                    {message && (
                        <Alert status="success" mb={4}>
                            <AlertIcon />
                            {message}
                        </Alert>
                    )}
                    <FormControl>
                        <FormLabel mt={5}>Calle</FormLabel>
                        <Input value={street} onChange={(e) => setStreet(e.target.value)} />
                    </FormControl>
                    <Grid templateColumns="1fr 1fr" gap={4}>
                        <FormControl mt={5}>
                            <FormLabel>Número</FormLabel>
                            <Input value={number} onChange={(e) => setNumber(e.target.value)} />
                        </FormControl>

                        <FormControl mt={5}>
                            <FormLabel>Código Postal</FormLabel>
                            <Input value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                        </FormControl>
                    </Grid>

                    <FormControl mt={5}>
                        <FormLabel>Ciudad</FormLabel>
                        <Input value={city} onChange={(e) => setCity(e.target.value)} />
                    </FormControl>
                    <FormControl mt={5}>
                        <FormLabel>Otros detalles</FormLabel>
                        <Textarea value={other} onChange={(e) => setOther(e.target.value)} />
                    </FormControl>
                    <Button colorScheme="purple" mt={5} onClick={handleSubmit}>
                        Guardar dirección de envío
                    </Button>
                </Card>
            </Center>
        </>
    );
};

export default AdressCart;
