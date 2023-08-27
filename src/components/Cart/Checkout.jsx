import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Box, Button, Flex, Text, Link, List, ListItem, VStack, CloseButton, Card, HStack } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

const Checkout = () => {
    const { cart, clearCart, addCart } = useContext(ProductsContext);

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
                                <CloseButton size="sm" onClick={() => removeFromCart(product.id)} />
                            </ListItem>
                        ))
                    )}
                </List>
                <Flex justifyContent="space-between">
                    <HStack spacing={2}>
                        <Link color="purple.500" onClick={clearCart}>
                            <FaTrashAlt /> Vaciar carrito
                        </Link>
                    </HStack>
                    <Button colorScheme="purple" disabled>
                        Comprar
                    </Button>
                </Flex>
            </VStack>
        </Card>
    );
};

export default Checkout;
