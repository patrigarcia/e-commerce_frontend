import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Box, Card, Divider, VStack, List, ListItem, Text, UnorderedList, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, Stack, StackDivider } from "@chakra-ui/react";
import apiClient from "../../api/apiClient";

const UserOrders = () => {
    const { user } = useContext(UserContext);
    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {
        if (user) {
            getUserOrders();
        }
    }, [user]);

    const getUserOrders = async () => {
        try {
            const response = await apiClient.get("/users/orders");
            setUserOrders(response.data.orders);
        } catch (error) {
            console.error("Error al obtener los pedidos del usuario:", error);
        }
    };

    return (
        <>
            {userOrders.map((order) => (
                <Card mt={5} mb={5} ml={7} mr={7} border={"1px solid"} boxShadow={"2x1"} key={order.id}>
                    <CardBody>
                        <Stat>
                            <StatHelpText mb={5}>Código del pedido: {order.id}</StatHelpText>
                            {order.products.map((product) => (
                                <Box key={product.productId} mt={2} borderRadius="lg" p="2" border={"1px solid gray"} width={"40%"}>
                                    <StatLabel fontSize={21}>{product.productName}</StatLabel>
                                    <StatNumber fontSize={16}>€ {product.productPrice}</StatNumber>
                                </Box>
                            ))}
                            <StatNumber mt={5} mb={5}>
                                Total € {order.products.reduce((sum, product) => sum + parseFloat(product.productPrice), 0)}
                            </StatNumber>
                        </Stat>
                    </CardBody>
                </Card>
            ))}
        </>
    );
};

export default UserOrders;
