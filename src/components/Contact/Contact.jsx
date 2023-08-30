import React, { useState } from "react";
import "./Contact.scss";
import { FormControl, FormLabel, Input, Textarea, Button, VStack, useToast, Card, CardBody, Center, Box, Text } from "@chakra-ui/react";
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
        <Box className="containerD">
            <Card className="formCard" maxW="md" mx="auto">
                <Text className="title">Contacto</Text>
                <Center style={{ textAlign: "center" }}>
                    <Text>
                        Dejanos un mensaje, un representante
                        <br /> te va a contactar muy pronto!
                    </Text>
                </Center>

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
        </Box>
    );
};

export default Contact;
