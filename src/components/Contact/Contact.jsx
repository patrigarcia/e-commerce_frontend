import React from "react";
import "./Contact.scss";
import { FormControl, FormLabel, Input, Textarea, Button, VStack, useToast, Card, CardBody } from "@chakra-ui/react";

const Contact = () => {
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de manejo de envío del formulario...
    };

    return (
        <div className="containerD">
            <h1 className="title">Contacto</h1>
            <Card className="formCard" maxW="md" mx="auto" mt={8}>
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4} align="stretch">
                            <FormControl id="name">
                                <FormLabel>Nombre</FormLabel>
                                <Input type="text" name="name" />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" name="email" />
                            </FormControl>
                            <FormControl id="phone">
                                <FormLabel>Teléfono</FormLabel>
                                <Input type="tel" name="phone" />
                            </FormControl>
                            <FormControl id="message">
                                <FormLabel>Mensaje</FormLabel>
                                <Textarea name="message" required />
                            </FormControl>
                            <Button type="submit" colorScheme="blue">
                                Enviar Mensaje
                            </Button>
                        </VStack>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Contact;
