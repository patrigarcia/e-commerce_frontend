import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";
import StepperCart from "../StepperCart/StepperCart";
import Checkout from "../Checkout/Checkout";
import ProductsCart from "../ProductsCart/ProductsCart";
import AdressCart from "../AdressCart/AdressCart";
import "./Cart.scss";

const Cart = () => {
    const [isBuying, setIsBuying] = useState(false);

    return (
        <>
            <StepperCart />
            <Grid className="cart_bg" templateColumns={{ base: "1fr", md: "3fr 2fr" }}>
                {isBuying ? null : <ProductsCart />}
                {isBuying ? <AdressCart /> : null}
                <Checkout selection={() => setIsBuying(true)} />
            </Grid>
        </>
    );
};

export default Cart;
