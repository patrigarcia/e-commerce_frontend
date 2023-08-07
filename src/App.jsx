import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <Grid templateAreas={{ base: `"nav" "main" "footer"`, lg: `"nav nav" "aside main" "footer footer"` }} templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
            <GridItem area="nav" background="red">
                <Header />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5} background="blue">
                    Aside
                </GridItem>
            </Show>
            <GridItem area="main" background="green">
                <Box paddingLeft={9} paddingRight={9}>
                    Main
                </Box>
            </GridItem>
            <GridItem area="footer" background="purple">
                Footer
            </GridItem>
        </Grid>
    );
};

export default App;
