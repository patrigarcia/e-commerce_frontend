import React, { useState, useContext } from "react";
import { Box, Button, FormControl, FormLabel, Input, Text, VStack, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import apiClient from "../../api/apiClient";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const AdminAddProduct = () => {
    const [ProductInformation, setProductInformation] = useState({
        categoryId: "",
        name: "",
        description: "",
        price: 0,
        stock: 0,
        image: null,
    });

    const { getProducts } = useContext(ProductsContext);

    const manejarCambioEntrada = (evento) => {
        const { name, value } = evento.target;
        setProductInformation((infoAnterior) => ({
            ...infoAnterior,
            [name]: value,
        }));
    };

    const manejarCambioImagen = (evento) => {
        setProductInformation((infoAnterior) => ({
            ...infoAnterior,
            image: evento.target.files[0],
        }));
    };

    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        const formData = new FormData();
        formData.append("categoryId", ProductInformation.categoryId);
        formData.append("name", ProductInformation.name);
        formData.append("description", ProductInformation.description);
        formData.append("price", ProductInformation.price);
        formData.append("stock", ProductInformation.stock);
        formData.append("image", ProductInformation.image);

        try {
            await apiClient.post("/products", formData);
            setProductInformation({
                categoryId: "",
                name: "",
                description: "",
                price: 0,
                stock: 0,
                image: null,
            });
            // aca hay que agregar el componente de actualizar los productos tambien
            getProducts();
        } catch (error) {
            console.error("Error al crear el producto:", error);
        }
    };

    return (
        <Box p={5} borderWidth="1px" borderRadius="lg">
            <Text fontSize="20px" fontWeight="bold" mb={3}>
                Agregar un producto
            </Text>
            <form onSubmit={manejarEnvio}>
                <VStack spacing={3} align="start">
                    <FormControl>
                        <FormLabel>Categoría</FormLabel>
                        <Input type="text" name="categoryId" value={ProductInformation.categoryId} onChange={manejarCambioEntrada} />
                        <FormLabel>Nombre</FormLabel>
                        <Input type="text" name="name" value={ProductInformation.name} onChange={manejarCambioEntrada} />
                        <FormLabel>Descripción</FormLabel>
                        <Input type="text" name="description" value={ProductInformation.description} onChange={manejarCambioEntrada} />

                        <FormLabel>Price</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="€" />
                            <Input type="price" name="price" value={ProductInformation.price} onChange={manejarCambioEntrada} />
                        </InputGroup>
                        <FormLabel>Stock</FormLabel>
                        <Input type="number" name="stock" value={ProductInformation.stock} onChange={manejarCambioEntrada} />

                        <FormLabel>Imagen</FormLabel>
                        <Input type="file" name="image" onChange={manejarCambioImagen} />
                    </FormControl>

                    <Button colorScheme="purple" type="submit">
                        Agregar
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default AdminAddProduct;
