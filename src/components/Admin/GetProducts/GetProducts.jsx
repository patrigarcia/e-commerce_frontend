import React, { useState, useEffect } from "react";
import { Box, Text, List, ListItem } from "@chakra-ui/react";
import apiClient from "../../../api/apiClient";

const GetProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await apiClient.get("/categoryName/:categoryName");
                setProducts(response.data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        }
        fetchProducts();
    }, []);

    return (
        <Box p={5} borderWidth="1px" borderRadius="lg">
            <Text fontSize="20px" fontWeight="bold" mb={3}>
                Lista de Productos con Categorías
            </Text>
            <List>
                {products.map((product) => (
                    <ListItem key={product.id}>
                        <Text>{product.name}</Text>
                        <Text>Categoría: {product.category.name}</Text>
                        <Text>Precio: €{product.price}</Text>
                        <Text>Stock: {product.stock}</Text>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default GetProducts;
