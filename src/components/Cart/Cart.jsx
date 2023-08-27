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
                        <Table variant="simple" mt={3}>
                            <Thead>
                                <Tr>
                                    <Th>Producto</Th>
                                    <Th>Precio</Th>
                                    <Th>Acciones</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {cart.map((product) => (
                                    <Tr key={product.id}>
                                        <Td display="flex" alignItems="center">
                                            <Image className="cart_img" src={getImageURL(product.imagePath)} alt={product.name} mr={3} />
                                            <Text fontSize="lg">
                                                {product.name}
                                                <br /> {product.description}
                                            </Text>
                                        </Td>
                                        <Td>${product.price}</Td>
                                        <Td>
                                            <Button colorScheme="red" onClick={() => removeFromCart(product.id)}>
                                                Eliminar
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                        <Button colorScheme="purple" onClick={handleBuy} mt={3}>
                            Comprar
                        </Button>
                    </>
                )}
            </Box>
        </Flex>
    );
};

export default Cart;
