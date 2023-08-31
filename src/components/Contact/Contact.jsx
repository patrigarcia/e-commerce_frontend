import React, { useState } from "react";
import "./Contact.scss";
import { FormControl, FormLabel, Input, Textarea, Button, VStack, useToast, Card, CardBody, Image, Box, Text, Grid, Center } from "@chakra-ui/react";
import { Form } from "react-router-dom";

const Contact = () => {
    const toast = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        showToast();
        clearForm();
    };

    const showToast = () => {
        toast({
            title: "Mensaje Enviado",
            description: "Muchas gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };

    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Grid templateColumns="repeat(2, 1fr)" className="containerD">
            <Box position="relative">
                <Image src="src/assets/robot.png" alt="contact_robot" mt="10%" ml="10%" w="75%" />
                <Center position="absolute" top="10%" left="50%" transform="translate(-50%, -50%)">
                    <Text as="b" color="white" fontSize="1.4em" textAlign="center">
                        ¿List@ para conectarte? <br />
                        ¡Esperamos tu mensaje!
                    </Text>
                </Center>
            </Box>
            <Card w="70%" ml="5%" p="2%">
                <Text as="b" ml="1%" p="5%" fontSize="1.2em">
                    Contacto
                </Text>

                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <VStack spacing={4} align="stretch">
                            <FormControl id="name">
                                <FormLabel>Nombre</FormLabel>
                                <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="phone">
                                <FormLabel>Teléfono</FormLabel>
                                <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="message">
                                <FormLabel>Mensaje</FormLabel>
                                <Textarea name="message" required value={formData.message} onChange={handleInputChange} />
                            </FormControl>
                            <Button type="submit" colorScheme="purple">
                                Enviar Mensaje
                            </Button>
                        </VStack>
                    </Form>
                </CardBody>
            </Card>
        </Grid>
    );
};

export default Contact;
