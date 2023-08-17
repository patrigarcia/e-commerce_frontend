import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";

// acá importé los componentes que estaban en app
import Header from "./components/Header/Header";
import ImageBar from "./components/ImageBar/ImageBar";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import ErrorPage from "./components/Error/ErrorPage";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <ProductsProvider>
                    <OrdersProvider>
                        <Grid templateAreas={{ base: `"nav" "main" "footer"`, lg: `"nav nav" "aside main" "footer footer"` }} templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
                            <GridItem area="nav">
                                <Header />
                                <Routes>
                                    <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/profile" element={<Profile />} />
                                </Routes>
                            </GridItem>
                            <Show above="lg">
                                <GridItem area="aside" paddingX={5}>
                                    aside
                                </GridItem>
                            </Show>
                            <GridItem area="main">
                                <Box paddingLeft={9} paddingRight={9}>
                                    <ImageBar />
                                    <Home />
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

export default MyRoutes;
