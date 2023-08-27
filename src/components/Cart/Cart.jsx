import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { Box, Flex, Image, Text, IconButton, Stack, Grid, Card } from "@chakra-ui/react";
import { getImageURL } from "../../api/apiClient";
import { CloseIcon } from "@chakra-ui/icons";
import Checkout from "./Checkout";
import "./Cart.scss";

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
            <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }} gap={6}>
                <Flex className="cart" direction="row">
                    <Card w="90%" ml={20}>
                        <Text className="cart_title">Tu carrito</Text>
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
                                                <IconButton icon={<CloseIcon />} size="md" colorScheme="red" aria-label="Eliminar" onClick={() => removeFromCart(product.id)} mt={2} />
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
