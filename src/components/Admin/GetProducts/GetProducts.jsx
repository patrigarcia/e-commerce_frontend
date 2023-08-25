import React, { useState, useEffect } from "react";
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Flex } from "@chakra-ui/react";
import apiClient from "../../../api/apiClient";
import "./GetProducts.scss";

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [categoryMap, setCategoryMap] = useState({});

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await apiClient.get("/products/categories");
                setProducts(response.data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        }

        async function fetchCategories() {
            try {
                const response = await apiClient.get("/categories");
                const categories = response.data.reduce((map, category) => {
                    map[category.id] = category.name;
                    return map;
                }, {});
                setCategoryMap(categories);
            } catch (error) {
                console.error("Error al obtener las categorías:", error);
            }
        }

        fetchProducts();
        fetchCategories();
    }, []);

    return (
        <>
            {" "}
            <Flex>
                <Text fontSize="20px" fontWeight="bold" mb={3}>
                    Lista de Productos con Categorías
                </Text>
                <Box className="product_list">
                    <Table className="product_table" variant="striped" colorScheme="purple">
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Nombre</Th>
                                <Th>Descripción</Th>
                                <Th>Categoría</Th>
                                <Th>Stock</Th>
                                <Th>Precio</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {products.map((product) => (
                                <Tr key={product.id}>
                                    <Td>{product.id}</Td>
                                    <Td>{product.name}</Td>
                                    <Td>{product.description}</Td>
                                    <Td>{categoryMap[product.categoryId] || "Sin categoría"}</Td>
                                    <Td>{product.stock}</Td>
                                    <Td>€{product.price}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </>
    );
};

export default GetProducts;
