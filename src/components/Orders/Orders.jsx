import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

import { Flex, VStack, Text } from "@chakra-ui/react";
import apiClient from "../../api/apiClient";

const Orders = () => {
    const { cart } = useContext(ProductsContext);

    const createOrder = async () => {
        try {
            setLoading(true);
            const productIds = cart.map((product) => product.id);
            const orderData = {
                productIds,
                status: "pending",
            };
            const response = await apiClient.post("/orders/productId", orderData);
            setLoading(false);
        } catch (error) {
            console.error("Error creating order:", error);
            setLoading(false);
        }
    };

    return (
        <Flex direction="column" align="center" justify="center" minHeight="80vh">
            <Text mb={4}>Muchas gracias por tu pedido!</Text>
            <VStack spacing={4} align="stretch">
                {cart.map((product) => (
                    <Flex key={product.id} justifyContent="space-between" alignItems="center">
                        <Text>{product.name}</Text>
                    </Flex>
                ))}
            </VStack>
        </Flex>
    );
};

export { Orders, createOrder };

export default Orders;
