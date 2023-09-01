import React, { useState } from "react";
import { Box, Text, Button, Input, FormControl, FormLabel, Card } from "@chakra-ui/react";
import apiClient from "../../../api/apiClient";

const DeleteProduct = () => {
    const [productId, setProductId] = useState("");
    const [deleteMessage, setDeleteMessage] = useState("");

    const handleDelete = async () => {
        try {
            const response = await apiClient.delete(`/products/${productId}`);
            setDeleteMessage(response.data.message);
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            setDeleteMessage("Ha ocurrido un error al eliminar el producto");
        }
    };

    return (
        <Card w="60%" p="3%" mt="8%" ml="20%">
            <Text as="b" fontSize="1.2em" mb="3%">
                Eliminar Producto por ID
            </Text>
            <FormControl>
                <FormLabel>ID del Producto</FormLabel>
                <Input mb="3%" type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
            </FormControl>
            <Button colorScheme="red" onClick={handleDelete}>
                Eliminar
            </Button>
            {deleteMessage && <Text mt={3}>{deleteMessage}</Text>}
        </Card>
    );
};

export default DeleteProduct;
