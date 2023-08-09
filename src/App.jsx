import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import Profile from "./components/Profile/Profile";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";
import Contact from "./components/Contact/Contact";
// import Home from "./components/Home/Home";
// import SignUp from "./components/Signup/Signup";

const App = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <ProductsProvider>
                    <OrdersProvider>
                        <Grid templateAreas={{ base: `"nav" "main" "footer"`, lg: `"nav nav" "aside main" "footer footer"` }} templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
                            <GridItem area="nav">
                                <Header />
                                <Routes>
                                    <Route path="/" element={<Products />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/contact" element={<Contact />} />
                                    {/* <Route path="/home" element={<Home />} /> */}

                                    {/* <Route path="/signUp" element={<SignUp />} /> */}
                                    <Route path="/profile" element={<Profile />} />
                                </Routes>
                            </GridItem>
                            <Show above="lg">
                                <GridItem area="aside" paddingX={5}>
                                    Aside
                                </GridItem>
                            </Show>
                            <GridItem area="main">
                                <Box paddingLeft={9} paddingRight={9}>
                                    Main
                                </Box>
                            </GridItem>
                            <GridItem area="footer">Footer</GridItem>
                        </Grid>
                    </OrdersProvider>
                </ProductsProvider>
            </UserProvider>
        </BrowserRouter>
    );
};

export default App;
