import React from "react";
import { Box, Center, Grid, GridItem, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <Box py={6} bg="gray.800" color="white">
            <Grid templateColumns={{ base: "1fr", md: "1fr 3fr" }} gap={6}>
                <GridItem>
                    <VStack spacing={2}>
                        <Link href="/contacto">Contacto</Link>
                        <HStack spacing={4}>
                            <Link href="#" isExternal>
                                <Icon as={FaFacebook} boxSize={6} />
                            </Link>
                            <Link href="#" isExternal>
                                <Icon as={FaInstagram} boxSize={6} />
                            </Link>
                            <Link href="#" isExternal>
                                <Icon as={FaTwitter} boxSize={6} />
                            </Link>
                            <Link href="#" isExternal>
                                <Icon as={FaLinkedin} boxSize={6} />
                            </Link>
                        </HStack>
                    </VStack>
                </GridItem>
                <GridItem>
                    <Center>
                        <Text fontSize="sm" textAlign="center">
                            Arcade © {new Date().getFullYear()} - Desarrollado por Patricia Gonzalez Garcia
                        </Text>
                    </Center>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Footer;
