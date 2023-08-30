import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
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
        <Card w="120%" ml="8%" mt="10%" alignSelf="flex-start">
            <Text as="b" fontSize="1.2em">
                Estos son tus pedidos:
            </Text>
            <UnorderedList>
                {userOrders.map((order) => (
                    <ListItem key={order.id} mb={4}>
                        <Text fontSize="xl" fontWeight="bold">
                            Código del pedido: {order.id}
                        </Text>
                        <List ml={4}>
                            {order.products.map((product) => (
                                <ListItem key={product.productId} mt={2}>
                                    <Text>Nombre del Producto: {product.productName}</Text>
                                    <Text>Precio del Producto: {product.productPrice}</Text>
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>
                ))}
            </UnorderedList>
        </Card>
    );
};

export default UserOrders;
