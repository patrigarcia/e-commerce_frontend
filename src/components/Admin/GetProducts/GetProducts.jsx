import React, { useState, useEffect } from "react";
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Flex } from "@chakra-ui/react";
import apiClient from "../../../api/apiClient";
import ReactPaginate from "react-paginate";
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

    return (
        <Flex direction="column">
            <Text className="product_title">Lista de Productos</Text>
            <Box className="product_list">
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
                                <Td>€{product.price}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            <ReactPaginate
                previousLabel={"Anterior"}
                nextLabel={"Siguiente"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(products.length / productsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(selected) => setCurrentPage(selected.selected)}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
        </Flex>
    );
};

export default GetProducts;
