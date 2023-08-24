import React, { useState } from "react";
import { Box, Text, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import apiClient from "../../../api/apiClient";

const DeleteProduct = () => {
    const [productName, setProductName] = useState("");
    const [deleteMessage, setDeleteMessage] = useState("");

    const handleDelete = async () => {
        try {
            const response = await apiClient.delete(`/products/${productName}`);
            setDeleteMessage(response.data.message);
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            setDeleteMessage("Ha ocurrido un error al eliminar el producto");
        }
    };

    return (
        <Box p={5} borderWidth="1px" borderRadius="lg">
            <Text fontSize="20px" fontWeight="bold" mb={3}>
                Eliminar Producto por Nombre
            </Text>
            <FormControl>
                <FormLabel>Nombre del Producto</FormLabel>
                <Input mb={3} type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </FormControl>
            <Button colorScheme="red" onClick={handleDelete}>
                Eliminar
            </Button>
            {deleteMessage && <Text mt={3}>{deleteMessage}</Text>}
        </Box>
    );
};

export default DeleteProduct;
