import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { Box, Flex, Image, Text, IconButton, Stack, Grid, Card } from "@chakra-ui/react";
import { getImageURL } from "../../api/apiClient";

import Checkout from "./Checkout";
import "./Cart.scss";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
    const { cart, clearCart, addCart } = useContext(ProductsContext);
    const { createOrder } = useContext(OrdersContext);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        clearCart();
        updatedCart.forEach((item) => addCart(item));
    };

    return (
        <>
            <Grid className="cart_bg" templateColumns={{ base: "1fr", md: "3fr 2fr" }}>
                <Flex className="cart" direction="row" mb={10}>
                    <Card w="70%" ml="24%">
                        <Text className="cart_title">Estos productos están en tu carrito:</Text>
                        <Stack spacing={3} mt={3}>
                            {cart.length === 0 ? (
                                <Text>No hay productos en el carrito</Text>
                            ) : (
                                cart.map((product) => (
                                    <Box key={product.id} borderRadius="lg" overflow="hidden" boxShadow="md">
                                        <Flex direction={{ base: "column", md: "row" }}>
                                            <Image className="cart_img" src={getImageURL(product.imagePath)} alt={product.name} objectFit="cover" boxSize={{ base: "100%", md: "150px" }} />
                                            <Box p={4} flex="1">
                                                <Text fontSize="lg" fontWeight="bold">
                                                    {product.name}
                                                </Text>
                                                <Text>{product.description}</Text>
                                                <Text fontSize="lg" mt={2}>
                                                    ${product.price}
                                                </Text>
                                                <IconButton
                                                    icon={<FaTrashAlt />}
                                                    size="sm"
                                                    colorScheme="purple"
                                                    aria-label="Eliminar"
                                                    position="absolute"
                                                    right={5}
                                                    onClick={() => removeFromCart(product.id)}
                                                    mt={2}
                                                />
                                            </Box>
                                        </Flex>
                                    </Box>
                                ))
                            )}
                        </Stack>
                    </Card>
                </Flex>
                <Checkout />
            </Grid>
        </>
    );
};

export default Cart;
