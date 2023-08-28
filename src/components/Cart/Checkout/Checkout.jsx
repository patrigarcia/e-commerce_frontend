import React, { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import { Box, Button, Flex, Text, Link, List, ListItem, VStack, Card, HStack } from "@chakra-ui/react";
import "./Checkout.scss";

const Checkout = () => {
    const { cart, clearCart } = useContext(ProductsContext);

    let totalPrice = 0;

    cart.forEach((product) => {
        totalPrice += parseFloat(product.price);
    });

    return (
        <>
            <Flex mt={5} h="fit-content">
                <Card w="50%" p={4} mt={12} borderRadius="lg" boxShadow="lg">
                    <VStack align="stretch" spacing={4}>
                        <Text fontSize="xl">Resumen</Text>
                        <List spacing={3}>
                            {cart.length === 0 ? (
                                <Text>El carrito está vacío</Text>
                            ) : (
                                cart.map((product) => (
                                    <ListItem key={product.id} borderRadius="lg" overflow="hidden" boxShadow="md" p={3}>
                                        <Box>
                                            <Text fontSize="md" fontWeight="bold">
                                                {product.name}
                                            </Text>
                                            <Text fontSize="lg">${product.price}</Text>
                                        </Box>
                                    </ListItem>
                                ))
                            )}
                        </List>

                        <Flex direction="column" alignItems="flex-end">
                            <HStack w="100%" justifyContent="space-between" flex="1">
                                <Text as="b">Total:</Text>
                                <Text className="price_checkout" p={2}>
                                    ${totalPrice.toFixed(2)}
                                </Text>
                            </HStack>
                        </Flex>
                        <Button colorScheme="purple" disabled>
                            Comprar
                        </Button>
                        <Link mt={4} color="red.500" onClick={clearCart}>
                            Vaciar carrito
                        </Link>
                    </VStack>
                </Card>
            </Flex>
        </>
    );
};

export default Checkout;
