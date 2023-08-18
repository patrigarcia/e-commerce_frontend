import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

// acá importé los componentes que estaban en app
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import ImageBar from "./components/ImageBar/ImageBar";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import ErrorPage from "./components/Error/ErrorPage";
import SignUp from "./components/SignUp/SignUp";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Grid templateAreas={{ base: `"nav"`, lg: `"nav nav"` }} templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
                <GridItem area="nav">
                    <Header />

                    <Routes>
                        <Route path="/" element={<Layout />} errorElement={<ErrorPage />} />
                        <Route index element={<Home />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="/cart" element={<Cart />} errorElement={<ErrorPage />} />
                        <Route path="/login" element={<Login />} errorElement={<ErrorPage />} />
                        <Route path="/contact" element={<Contact />} errorElement={<ErrorPage />} />
                        <Route path="/profile" element={<Profile />} errorElement={<ErrorPage />} />
                        <Route path="/signup" element={<SignUp />} errorElement={<ErrorPage />} />
                    </Routes>
                </GridItem>
            </Grid>
        </BrowserRouter>
    );
};

export default AppRoutes;
