import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, VStack, Card, Center } from "@chakra-ui/react";
import axios from "axios";
import "./SignUp.scss";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        mail: "",
        tel: "",
        password: "",
        role: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/users", formData);
            console.log(response.data.message);
        } catch (error) {
            console.error("Error al crear al usuario:", error);
        }
    };

    return (
        <div className="containerD">
            <h1 className="title">Registrate</h1>
            <Center mt={4} style={{ textAlign: "center" }}>
                <h5>
                   Crea tu cuenta para poder inciar sesión!
                </h5>
            </Center>

            <Card className="formCard" maxW="md" mx="auto" mt={8}>
                <VStack spacing={4} align="center">
                    <form onSubmit={handleSubmit} className="signup-form">
                        <FormControl id="username">
                            <FormLabel>Nombre</FormLabel>
                            <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </FormControl>
                        <FormControl id="surname">
                            <FormLabel>Apellido</FormLabel>
                            <Input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" name="mail" value={formData.mail} onChange={handleChange} required />
                        </FormControl>
                        <FormControl id="tel">
                            <FormLabel>Tel.</FormLabel>
                            <Input type="number" name="tel" value={formData.tel} onChange={handleChange} required />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Contraseña</FormLabel>
                            <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        </FormControl>

                        <Button type="submit" colorScheme="purple">
                            Registrarme
                        </Button>
                    </form>
                </VStack>
            </Card>
        </div>
    );
};

export default SignUp;
