import React, { useContext, useState } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import { Button, Flex, Text, Link, List, ListItem, VStack, Card, HStack } from "@chakra-ui/react";
import "./Checkout.scss";

const Checkout = ({ selection }) => {
    const { cart, clearCart } = useContext(ProductsContext);
    const [isNext, setIsNext] = useState(false);
    let totalPrice = 0;

    cart.forEach((product) => {
        totalPrice += parseFloat(product.price);
    });

    const handleNextStep = () => {
        setIsNext(true);
        selection();
    };

    return (
        <>
            <Flex w="100%" mt={3} h="fit-content">
                <Card w="80%" p={4} mt={12} mb={8} mr={4} borderRadius="lg">
                    <VStack align="stretch" spacing={4}>
                        <Text fontSize="xl">Resumen</Text>
                        <List spacing={3}>
                            {cart.length === 0 ? (
                                <Text>El carrito está vacío</Text>
                            ) : (
                                cart.map((product) => (
                                    <ListItem key={product.id} borderRadius="lg" overflow="hidden" boxShadow="md" p={3}>
                                        <HStack w="100%" justifyContent="space-between" flex="1">
                                            <Text fontSize="md" fontWeight="bold">
                                                {product.name}
                                            </Text>
                                            <Text fontSize="lg">{product.price}€</Text>
                                        </HStack>
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
                        {isNext ? (
                            <>
                                <Button colorScheme="purple" onClick={handleNextStep}>
                                    Comprar
                                </Button>
                            </>
                        ) : (
                            <Button colorScheme="purple" onClick={handleNextStep}>
                                Siguiente
                            </Button>
                        )}
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
