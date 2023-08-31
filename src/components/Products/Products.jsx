import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Flex, Grid, Image, VStack, Text, Button, Card, Box, useToast } from "@chakra-ui/react";
import { getImageURL } from "../../api/apiClient";
import { Link } from "react-router-dom";
import "./Products.scss";

const Products = ({ filterQuery, sortBy }) => {
    const { getProducts, products, addCart, getProductsByCategory } = useContext(ProductsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [favorites, setFavorites] = useState([]);
    const [sortedProducts, setsortedProducts] = useState([]);
    const productsPerPage = 8;
    const toast = useToast();

    useEffect(() => {
        filterQuery.categoryId ? getProductsByCategory(filterQuery) : getProducts();
    }, [filterQuery]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (productId) => {
        if (favorites.includes(productId)) {
            setFavorites(favorites.filter((id) => id !== productId));
        } else {
            setFavorites([...favorites, productId]);
        }
    };
    useEffect(() => {
        console.log("cambió el ordenamiento");
        let unsortedProducts = products[0]?.Products ? products[0].Products : [...products];
        const sorted = unsortedProducts.sort((a, b) => {
            if (sortBy === "priceLowToHigh") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setsortedProducts(sorted);
    }, [products, sortBy]);

    const handleAddToCart = (product) => {
        addCart(product);
        toast({
            title: "Agregado al carrito",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalProducts = products.length;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Flex flexDirection="column" alignItems="center">
                <VStack>
                    <Grid className="product-grid" gap={4}>
                        {currentProducts.map((product) => (
                            <Card variant="filled" boxShadow="xl" key={product.id}>
                                <Box className="product-card">
                                    <VStack spacing={2} align="start">
                                        <Box className="image-container">
                                            <Image className="product-image" src={getImageURL(product.imagePath)} alt={product.name} rounded="lg" />
                                        </Box>
                                        <Text className="product-name">{product.name}</Text>
                                        <Text className="product-description">{product.description}</Text>
                                        <Text className="product-price" fontWeight="bold">
                                            {product.price} €
                                        </Text>
                                    </VStack>
                                    <Button className="add-cart-button" colorScheme="purple" onClick={() => handleAddToCart(product)}>
                                        Añadir al carrito
                                    </Button>
                                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                                        <Link to={`/product/${product.id}`}>
                                            <Button className="add-cart-button" variant="ghost" colorScheme="purple">
                                                Ver detalles
                                            </Button>
                                        </Link>
                                        <Button className="favorite-button" variant="ghost" colorScheme={favorites.includes(product.id) ? "red" : "white"} onClick={() => toggleFavorite(product.id)}>
                                            ❤️
                                        </Button>
                                    </Flex>
                                </Box>
                            </Card>
                        ))}
                    </Grid>
                    <Box mt={8} display="flex" justifyContent="center">
                        <Button variant="ghost" colorScheme="purple" onClick={() => paginate(currentPage - 1)} isDisabled={currentPage === 1} mr={1}>
                            Anterior
                        </Button>
                        <Button variant="ghost" colorScheme="purple" onClick={() => paginate(currentPage + 1)} isDisabled={indexOfLastProduct >= totalProducts}>
                            Siguiente
                        </Button>
                    </Box>
                </VStack>
            </Flex>
        </>
    );
};

export default Products;
