import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Divider, UnorderedList, ListItem, Button } from "@chakra-ui/react";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";

const Cart = () => {
    const { cart, clearCart } = useContext(ProductsContext);
    const { createOrder } = useContext(OrdersContext);

    const data = cart.map((product) => product.name);

    return (
        <div>
            <Divider orientation="horizontal">Carrito</Divider>
            <UnorderedList>
                {data.map((item) => (
                    <ListItem key={item}>{item}</ListItem>
                ))}
            </UnorderedList>
            <div>
                <Button colorScheme="red" onClick={clearCart}>
                    Vaciar carrito
                </Button>
                <Button
                    colorScheme="purple"
                    onClick={() => {
                        createOrder(cart);
                        clearCart();
                    }}
                >
                    Comprar
                </Button>
            </div>
        </div>
    );
};

export default Cart;
