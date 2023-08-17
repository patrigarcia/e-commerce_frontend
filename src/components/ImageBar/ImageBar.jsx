import React from "react";
import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";

const ImageBar = () => {
    return (
        <Flex bg="purple" color="white" alignItems="center" direction="row" p={4}>
            <Box flex="1">
                <Text fontSize="sm">¡No te pierdas nuestras promociones especiales!</Text>
            </Box>
            <Box>
                <Link href="/promotions">
                    <Image src="/images/promotion1.jpg" alt="Promotion 1" boxSize="50px" mx={2} />
                </Link>
                <Link href="/promotions">
                    <Image src="/images/promotion2.jpg" alt="Promotion 2" boxSize="50px" mx={2} />
                </Link>
                <Link href="/promotions">
                    <Image src="/images/promotion3.jpg" alt="Promotion 3" boxSize="50px" mx={2} />
                </Link>
            </Box>
        </Flex>
    );
};

export default ImageBar;
