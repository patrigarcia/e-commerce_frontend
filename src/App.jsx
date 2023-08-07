import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Grid templateAreas={{ base: `"nav" "main" "footer"`, lg: `"nav nav" "aside main" "footer footer"` }} templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
                <GridItem area="nav">
                    <Header />
                    <Routes>
                        {/* <Route path="/" element={<Products />} /> */}
                        {/* <Route path="/cart" element={<Cart />} /> */}
                        <Route path="/login" element={<Login />} />
                        {/* <Route path="/profile" element={<Profile />} /> */}
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
        </BrowserRouter>
    );
};

export default App;
