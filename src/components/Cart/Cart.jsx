import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { Box, Button, Image, List, ListItem, Text } from "@chakra-ui/react";
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
        <Box className="cart-container">
            <Text>Tu carrito</Text>
            {cart.length === 0 ? (
                <Text>No hay productos en el carrito</Text>
            ) : (
                <>
                    <List spacing={3} mt={3}>
                        {cart.map((product) => (
                            <ListItem key={product.id} display="flex" alignItems="center">
                                <Image src={getImageURL(product.imagePath)} alt={product.name} boxSize="50px" mr={3} />
                                <Box>
                                    <Text fontSize="lg">{product.name}</Text>
                                    <Text fontSize="sm">Precio: ${product.price}</Text>
                                </Box>
                                <Button ml="auto" variant="outline" colorScheme="red" onClick={() => removeFromCart(product.id)}>
                                    eliminar
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                    <Button onClick={handleBuy} mt={3}>
                        Comprar
                    </Button>
                </>
            )}
        </Box>
    );
};

export default Cart;
