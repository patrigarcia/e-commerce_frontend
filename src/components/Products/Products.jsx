import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Flex, Grid, Image, VStack, Text, Button, Card, IconButton, Select } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { getImageURL } from "../../api/apiClient";
import { Link } from "react-router-dom";
import "./Products.scss";

const Products = () => {
    const { getProducts, products, addCart } = useContext(ProductsContext);

    const [favorites, setFavorites] = useState({});
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortBy, setSortBy] = useState("priceHighToLow");

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        const sorted = [...products].sort((a, b) => {
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

    return (
        <>
            <Select value={sortBy} onChange={handleSortChange} width="200px" marginBottom="20px">
                <option value="priceHighToLow">Ordenar por: Precio (mayor a menor)</option>
                <option value="priceLowToHigh">Ordenar por: Precio (menor a mayor)</option>
            </Select>
            <Flex flexDirection="column" alignItems="center">
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
                    {sortedProducts.map((product) => (
                        <Card variant="filled" boxShadow="xl" key={product.id}>
                            <div className="product-card">
                                <VStack spacing={2} align="start">
                                    <Image className="product-image" src={getImageURL(product.imagePath)} alt={product.name} rounded="lg" />
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
                                    <IconButton icon={<FaHeart />} colorScheme={favorites[product.id] ? "red" : "gray"} onClick={() => toggleFavorite(product.id)} aria-label="Marcar como favorito" />
                                </Flex>
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Flex>
        </>
    );
};

export default Products;
