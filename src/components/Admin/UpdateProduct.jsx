import React, { useState, useContext } from "react";
import { Box, Button, FormControl, FormLabel, Input, Text, VStack, InputGroup, InputLeftAddon, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import apiClient from "../../api/apiClient";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const UpdateProduct = () => {
    const [productId, setProductId] = useState("");
    const [productUpdateData, setProductUpdateData] = useState({
        categoryId: "",
        name: "",
        description: "",
        price: 0,
        stock: 0,
        image: null,
    });

    const { getProducts } = useContext(ProductsContext);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductUpdateData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (event) => {
        setProductUpdateData((prevData) => ({
            ...prevData,
            image: event.target.files[0],
        }));
    };

    const handleUpdateSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("categoryId", productUpdateData.categoryId);
        formData.append("name", productUpdateData.name);
        formData.append("description", productUpdateData.description);
        formData.append("price", productUpdateData.price);
        formData.append("stock", productUpdateData.stock);
        formData.append("image", productUpdateData.image);

        try {
            await apiClient.put(`/products/${productId}`, formData);
            setProductId("");
            setProductUpdateData({
                categoryId: "",
                name: "",
                description: "",
                price: 0,
                stock: 0,
                image: null,
            });
            getProducts();
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <Box p={5} borderWidth="1px" borderRadius="lg">
            <Text fontSize="20px" fontWeight="bold" mb={3}>
                Actualizar un producto
            </Text>
            <form onSubmit={handleUpdateSubmit}>
                <VStack spacing={2} align="start">
                    <FormControl>
                        <FormLabel>ID del producto</FormLabel>
                        <Input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
                    </FormControl>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            ¿Qué quieres editar?
                        </MenuButton>

                        <MenuList>
                            <MenuItem>
                                <FormLabel>Categoría</FormLabel>
                                <Input type="text" value={productUpdateData.categoryId} onChange={handleInputChange} />
                            </MenuItem>
                            <MenuItem>
                                <FormLabel>Nombre</FormLabel>
                                <Input type="text" placeholder="Product name" value={productUpdateData.name} onChange={handleInputChange} />
                            </MenuItem>
                            <MenuItem>
                                <FormLabel>Descripción</FormLabel>
                                <Input type="text" placeholder="Describe the product" value={productUpdateData.description} onChange={handleInputChange} />
                            </MenuItem>
                            <MenuItem>
                                <FormLabel>Precio</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon children="€" />
                                    <Input type="number" value={productUpdateData.price} onChange={handleInputChange} />
                                </InputGroup>
                            </MenuItem>
                            <MenuItem>
                                <FormLabel>Stock</FormLabel>
                                <Input type="number" value={productUpdateData.stock} onChange={handleInputChange} />
                            </MenuItem>
                            <MenuItem>
                                <FormLabel>Imagen</FormLabel>
                                <Input type="file" onChange={handleImageChange} />
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    <Button colorScheme="purple" type="submit">
                        Actualizar
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default UpdateProduct;
