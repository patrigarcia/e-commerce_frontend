import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Box, Button, Flex, Text, Link, List, ListItem, Stack, VStack, CloseButton, Center, Card } from "@chakra-ui/react";

const Checkout = () => {
    const { cart, clearCart } = useContext(ProductsContext);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        clearCart();
        updatedCart.forEach((item) => addCart(item));
    };

    return (
        <Card p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
            <VStack align="stretch" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                    Tu carrito:
                </Text>
                <List spacing={3}>
                    {cart.length === 0 ? (
                        <Text>El carrito está vacío</Text>
                    ) : (
                        cart.map((product) => (
                            <ListItem key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={3} display="flex" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Text fontSize="lg" fontWeight="bold">
                                        {product.name}
                                    </Text>
                                    <Text fontSize="lg">${product.price}</Text>
                                </Box>
                                <CloseButton color="red.500" onClick={() => removeFromCart(product.id)} />
                            </ListItem>
                        ))
                    )}
                </List>
                <Flex justifyContent="space-between">
                    <Link color="purple.500" onClick={clearCart}>
                        Vaciar carrito
                    </Link>
                    <Button colorScheme="purple" disabled>
                        Comprar
                    </Button>
                </Flex>
            </VStack>
        </Card>
    );
};

export default Checkout;
