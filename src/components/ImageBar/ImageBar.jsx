import React from "react";
import { Flex, Box, Image, Link } from "@chakra-ui/react";

const ImageBar = () => {
    return (
        <Flex mt={6}>
            <Image bg={"#2c1299"} className="banner" src="src/assets/banner.svg" alt="banner" w="300vh" />
        </Flex>
    );
};

export default ImageBar;
