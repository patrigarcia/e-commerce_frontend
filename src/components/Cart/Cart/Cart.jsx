import React, { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import { OrdersContext } from "../../../context/OrdersContext/OrdersState";
import { Grid } from "@chakra-ui/react";
import StepperCart from "../StepperCart/StepperCart";
import Checkout from "../Checkout/Checkout";
import ProductsCart from "../ProductsCart/ProductsCart";
import "./Cart.scss";

const Cart = () => {
    return (
        <>
            <StepperCart />
            <Grid className="cart_bg" templateColumns={{ base: "1fr", md: "3fr 2fr" }}>
                <ProductsCart />
                <Checkout />
            </Grid>
        </>
    );
};

export default Cart;
