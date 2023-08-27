import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Flex, Grid, Image, VStack, Text, Button, Card, IconButton, Select, Box } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { getImageURL } from "../../api/apiClient";
import { Link } from "react-router-dom";
import "./Products.scss";

const Products = ({ filterQuery }) => {
    const { getProducts, products, addCart, getProductsByCategory } = useContext(ProductsContext);
    const [favorites, setFavorites] = useState({});
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortBy, setSortBy] = useState("priceHighToLow");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        filterQuery.categoryId ? getProductsByCategory(filterQuery) : getProducts();
    }, [filterQuery]);

    useEffect(() => {
        let unsortedProducts = products[0]?.Products ? products[0].Products : [...products];
        const sorted = unsortedProducts.sort((a, b) => {
            if (sortBy === "priceLowToHigh") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setSortedProducts(sorted);
    }, [products, sortBy]);

    const toggleFavorite = (productId) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [productId]: !prevFavorites[productId],
        }));
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
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
            <Select value={sortBy} onChange={handleSortChange} width="35%" mb="20px">
                <option value="priceHighToLow">Ordenar por: Precio (mayor a menor)</option>
                <option value="priceLowToHigh">Ordenar por: Precio (menor a mayor)</option>
            </Select>
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
                                    <Button className="add-cart-button" colorScheme="purple" onClick={() => addCart(product)}>
                                        Añadir al carrito
                                    </Button>
                                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                                        <Link to={`/product/${product.id}`}>
                                            <Button className="add-cart-button" variant="ghost" colorScheme="purple">
                                                Ver detalles
                                            </Button>
                                        </Link>
                                        <IconButton
                                            icon={<FaHeart />}
                                            colorScheme={favorites[product.id] ? "red" : "gray"}
                                            onClick={() => toggleFavorite(product.id)}
                                            aria-label="Marcar como favorito"
                                        />
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
