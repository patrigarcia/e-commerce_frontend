import React, { useState } from "react";
import { Flex, Grid } from "@chakra-ui/react";
import StepperCart from "../StepperCart/StepperCart";
import Checkout from "../Checkout/Checkout";
import ProductsCart from "../ProductsCart/ProductsCart";
import AdressCart from "../AdressCart/AdressCart";
import OrderCompleted from "../../Orders/OrderCompleted/OrderCompleted";
import ImageBuy from "../../../assets/ImageBuy";
import "./Cart.scss";

const Cart = () => {
    const [buyStep, setBuyStep] = useState(0);
    const [pendingAddress, setPendingAddress] = useState(true);

    return (
        <>
            <Flex direction="column">
                <StepperCart buyStep={buyStep} />
                <Grid className="cart_bg" templateColumns={{ base: "2fr", md: "2fr 2fr" }}>
                    {buyStep === 0 && <ProductsCart />}
                    {buyStep === 1 && <AdressCart selection={() => setBuyStep(buyStep + 1)} updateAddress={() => setPendingAddress(false)} />}
                    {buyStep === 2 && <ImageBuy />}
                    {[0, 1, 2].includes(buyStep) && <Checkout buyStep={buyStep} selection={() => setBuyStep(buyStep + 1)} pendingAddress={pendingAddress} />}
                    {buyStep === 3 && <OrderCompleted />}
                </Grid>
            </Flex>
        </>
    );
};

export default Cart;
