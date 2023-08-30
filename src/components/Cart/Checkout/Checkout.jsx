import React, { useContext, useState } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import { Button, Flex, Text, Link, List, ListItem, VStack, Card, HStack } from "@chakra-ui/react";
import apiClient from "../../../api/apiClient";
import "./Checkout.scss";

const Checkout = ({ buyStep, selection, pendingAddress }) => {
    const { cart, clearCart } = useContext(ProductsContext);
    const [isNext, setIsNext] = useState(false);
    let totalPrice = 0;

    cart.forEach((product) => {
        totalPrice += parseFloat(product.price);
    });

    const handleNextStep = () => {
        setIsNext(true);
        selection();
        if (buyStep === 2) {
            createOrder();
        }
    };

    const createOrder = async () => {
        try {
            const productIds = cart.map((product) => product.id);
            const orderData = {
                productIds,
                status: "pending",
            };
            const response = await apiClient.post("/orders/productId", orderData);
            console.log("Order created:", response.data);
        } catch (error) {
            console.error("Error creating order:", error);
        }
    };

    return (
        <>
            <Card w="55vh" p="4" mt="20%" ml="7vh" h="fit-content">
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
                            <Button colorScheme="purple" onClick={handleNextStep} isDisabled={pendingAddress}>
                                {buyStep === 2 ? "Pagar" : "Siguiente"}
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
        </>
    );
};

export default Checkout;
