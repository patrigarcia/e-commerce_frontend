import React, { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import { Box, Flex, Image, Text, IconButton, Stack, Grid, Card, VStack, Divider } from "@chakra-ui/react";
import { getImageURL } from "../../../api/apiClient";
import { FaTrashAlt } from "react-icons/fa";
import "./ProductsCart.scss";

const ProductsCart = () => {
    const { cart, clearCart, addCart } = useContext(ProductsContext);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        clearCart();
        updatedCart.forEach((item) => addCart(item));
    };

    return (
        <>
            <Flex mb="10vh" mt="8vh">
                <Card w="75%" ml="15vh" h="fit-content">
                    <Text as="b" pl="4%" mt="2%" mb="2%" fontSize="1.3em">
                        Estos productos están en tu carrito:
                    </Text>
                    <Divider w="90%" alignSelf="center" />
                    <Stack spacing={3} mt={3}>
                        {cart.length === 0 ? (
                            <Text pl={4}>No hay productos en el carrito</Text>
                        ) : (
                            cart.map((product) => (
                                <Box key={product.id} borderRadius="lg" overflow="hidden" boxShadow="md">
                                    <Flex direction={{ base: "column", md: "row" }}>
                                        <Image src={getImageURL(product.imagePath)} alt={product.name} objectFit="cover" boxSize={{ base: "100%", md: "150px" }} m="4%" />
                                        <Box p={4} flex="1" position="relative">
                                            <VStack align="flex-start" w="70%">
                                                <Text fontSize="lg" fontWeight="bold">
                                                    {product.name}
                                                </Text>
                                                <Text>{product.description}</Text>
                                                <Text as="b" fontSize="lg" mt={2}>
                                                    {product.price}€
                                                </Text>
                                            </VStack>
                                            <IconButton
                                                icon={<FaTrashAlt />}
                                                size="sm"
                                                colorScheme="purple"
                                                aria-label="Eliminar"
                                                position="absolute"
                                                top={32}
                                                right={4}
                                                onClick={() => removeFromCart(product.id)}
                                            />
                                        </Box>
                                    </Flex>
                                </Box>
                            ))
                        )}
                    </Stack>
                </Card>
            </Flex>
        </>
    );
};

export default ProductsCart;
