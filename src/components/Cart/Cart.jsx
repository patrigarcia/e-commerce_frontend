import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { Box, Button, Flex, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { getImageURL } from "../../api/apiClient";
import "./Cart.scss";

const Cart = () => {
    const { cart, clearCart } = useContext(ProductsContext);
    const { createOrder } = useContext(OrdersContext);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        clearCart();
        updatedCart.forEach((item) => addCart(item));
    };

    const handleBuy = () => {
        const productIds = cart.map((item) => item.id);
        createOrder(productIds);
    };

    return (
        <Flex className="cart" direction="column">
            <Text className="cart_title">Tu carrito</Text>
            <Box className="cart-container">
                {cart.length === 0 ? (
                    <Text>No hay productos en el carrito</Text>
                ) : (
                    <>
                        <Table variant="unstyled">
                            <Thead>
                                <Tr>
                                    <Th>Producto</Th>
                                    <Th>Precio</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {cart.map((product) => (
                                    <Tr key={product.id}>
                                        <Td display="flex" alignItems="center">
                                            <Image className="cart_img" src={getImageURL(product.imagePath)} alt={product.name} mr={3} />
                                            <Text as="b" fontSize="lg">
                                                {product.name}
                                            </Text>
                                            <Text>
                                                <br /> {product.description}
                                            </Text>
                                        </Td>
                                        <Td>${product.price}</Td>

                                        <Button colorScheme="red" onClick={() => removeFromCart(product.id)}>
                                            Eliminar
                                        </Button>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </>
                )}
            </Box>
            <Button colorScheme="purple" onClick={handleBuy} mt={3}>
                Comprar
            </Button>
        </Flex>
    );
};

export default Cart;
