import React from "react";
import { Flex, Box, Image, Link } from "@chakra-ui/react";

const ImageBar = () => {
    return (
        <Flex alignItems="center" direction="row" mt={4}>
            <Box display="flex" bg={"#2c1299"} alignItems="center" w="100%">
                <Link href="/promotions">
                    <Image className="banner" src="src/assets/banner.svg" alt="banner" maxW="100%" height="200px" />
                </Link>
            </Box>
        </Flex>
    );
};

export default ImageBar;
