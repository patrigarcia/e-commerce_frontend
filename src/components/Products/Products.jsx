import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Flex, Grid, Image, VStack, Text, Button, Card, Box, useToast, HStack } from "@chakra-ui/react";
import { getImageURL } from "../../api/apiClient";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Products.scss";

const Products = ({ filterQuery, sortCriteria }) => {
    const { getProducts, products, addCart, getProductsByCategory } = useContext(ProductsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [favorites, setFavorites] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const productsPerPage = 10;
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
        let unsortedProducts = products[0]?.Products ? products[0].Products : [...products];
        const sorted = unsortedProducts.sort((a, b) => {
            if (sortCriteria === "priceLowToHigh") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        const sortedAndPrice = filterQuery.price ? sorted.filter((p) => p.price === filterQuery.price) : sorted;
        setSortedProducts(sortedAndPrice);
    }, [products, sortCriteria, filterQuery]);

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
            <Grid gap={2} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)" }}>
                {currentProducts.map((product) => (
                    <Card variant="filled" boxShadow="xl" key={product.id}>
                        <VStack p="5%" align="start">
                            <Box overflow="hidden">
                                <Image
                                    src={getImageURL(product.imagePath)}
                                    alt={product.name}
                                    rounded="lg"
                                    objectFit="cover"
                                    w="300px"
                                    h="200px"
                                    overflow="hidden"
                                    transition="transform 0.3s ease-in-out"
                                    _hover={{ transform: "scale(1.1)" }}
                                />
                            </Box>
                            <Text as="b" h="50px" overflow="hidden">
                                {product.name}
                            </Text>

                            <Text h="40px" overflow="hidden" fontSize="0.9em">
                                {product.description}
                            </Text>

                            <Text as="b" fontSize="1.1em" alignSelf="flex-end" mr="5%">
                                {product.price} €
                            </Text>
                        </VStack>
                        <Button w="100%" colorScheme="purple" onClick={() => handleAddToCart(product)}>
                            Añadir al carrito
                        </Button>
                        <HStack>
                            <Link to={`/product/${product.id}`}>
                                <Button variant="ghost" colorScheme="purple">
                                    Ver detalles
                                </Button>
                            </Link>
                            <Button pl="45%" variant="ghost" colorScheme={favorites.includes(product.id) ? "red" : "white"} onClick={() => toggleFavorite(product.id)}>
                                <FaHeart size={20} />
                            </Button>
                        </HStack>
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
        </>
    );
};

export default Products;
