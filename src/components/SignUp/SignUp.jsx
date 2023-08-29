import { useState } from "react";
import { Button, FormControl, FormLabel, Input, VStack, Card, Center, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";
import "./SignUp.scss";

const initialState = {
    name: "",
    surname: "",
    mail: "",
    tel: "",
    password: "",
    role: "",
    avatar: "michael.png",
};

const SignUp = () => {
    const [isLoading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await apiClient.post("/users", { ...formData, avatar: "michael.png" });
            setFormData(initialState);
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            setLoading(false);
            console.error("Error al crear al usuario:", error);
        }
    };

    return (
        <div className="containerD">
            <h1 className="title">Registrate</h1>
            <Center mt={4} style={{ textAlign: "center" }}>
                <h5>Crea tu cuenta para poder inciar sesión!</h5>
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
                        <Button type="submit" colorScheme="purple" isLoading={isLoading} loadingText="Registrándote..." width="100%" mb={4}>
                            {isLoading ? <Spinner size="sm" mr={2} /> : "Registrarme"}
                        </Button>
                    </form>
                </VStack>
            </Card>
        </div>
    );
};

export default SignUp;
