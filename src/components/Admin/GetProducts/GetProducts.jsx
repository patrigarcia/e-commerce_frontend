import React, { useState, useEffect } from "react";
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Flex, Card, Button, Grid } from "@chakra-ui/react";
import apiClient from "../../../api/apiClient";
import "./GetProducts.scss";

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [categoryMap, setCategoryMap] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 10;

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

    const indexOfLastProduct = (currentPage + 1) * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalProducts = products.length;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Card w="80%" p="3%" mt="10%" ml="9%" mb="5%">
            <Text className="product_title">Lista de Productos</Text>
            <Box>
                <Table variant="striped" colorScheme="purple">
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
                        {currentProducts.map((product) => (
                            <Tr key={product.id}>
                                <Td>{product.id}</Td>
                                <Td>{product.name}</Td>
                                <Td>{product.description}</Td>
                                <Td>{categoryMap[product.categoryId] || "Sin categoría"}</Td>
                                <Td>{product.stock}</Td>
                                <Td>{product.price}€</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            <Box mt={8} display="flex" justifyContent="center">
                <Button variant="ghost" colorScheme="purple" onClick={() => paginate(currentPage - 1)} isDisabled={currentPage === 0} mr={1}>
                    Anterior
                </Button>
                <Button variant="ghost" colorScheme="purple" onClick={() => paginate(currentPage + 1)} isDisabled={indexOfLastProduct >= totalProducts}>
                    Siguiente
                </Button>
            </Box>
        </Card>
    );
};

export default GetProducts;
