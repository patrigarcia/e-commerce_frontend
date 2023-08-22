import React from "react";
import { Flex, Box, Text, IconButton, Collapse, ListItem, UnorderedList, SimpleGrid, Center, Heading, Divider } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ImageBar from "../ImageBar/ImageBar";
import Products from "../Products/Products";

const Home = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ImageBar width="100%" />
            <Flex>
                <Box as="aside" w="200px" p={4} borderRight="1px solid #ccc" mt={10}>
                    <Text fontSize="xl" mb={4}>
                        Categorías
                    </Text>
                    <UnorderedList styleType="none">
                        {" "}
                        <ListItem>
                            <Flex align="center">
                                <Text>Consolas</Text>
                                <IconButton icon={<ChevronDownIcon />} variant="link" onClick={toggleCollapse} aria-expanded={isOpen} ml="auto" />
                            </Flex>
                            <Collapse in={isOpen} animateOpacity>
                                <UnorderedList ml={6} mt={2} styleType="none">
                                    {" "}
                                    <ListItem>Vintage</ListItem>
                                    <ListItem>PS5</ListItem>
                                </UnorderedList>
                            </Collapse>
                        </ListItem>
                        <ListItem>Juegos</ListItem>
                        <ListItem>Accesorios</ListItem>
                    </UnorderedList>{" "}
                </Box>
                <Box flex="1" p={4} mt={10}>
                    <main>
                        <Heading as="h1" mb={4}>
                            Consolas
                        </Heading>
                        <Divider mb={4} />
                        <Products />
                    </main>
                </Box>
            </Flex>
        </>
    );
};

export default Home;
