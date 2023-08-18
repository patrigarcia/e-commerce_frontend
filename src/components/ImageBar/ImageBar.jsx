import React from "react";
import { Flex, Box, Image, Link } from "@chakra-ui/react";

const ImageBar = () => {
    return (
        <Flex alignItems="center" direction="row" p={4} mt={4}>
            <Box display="flex" alignItems="center">
                <Link href="/promotions">
                    <Image src="http://192.168.1.139:9001/uploads/image_1691054682286-839026399.jpeg" alt="Promotion 1" boxSize="150px" mx={2} />
                </Link>
                <Link href="/promotions">
                    <Image src="http://192.168.1.139:9001/uploads/image_1691054682286-839026399.jpeg" alt="Promotion 2" boxSize="150px" mx={2} />
                </Link>
                <Link href="/promotions">
                    <Image src="http://192.168.1.139:9001/uploads/image_1691054682286-839026399.jpeg" alt="Promotion 3" boxSize="150px" mx={2} />
                </Link>
            </Box>
        </Flex>
    );
};

export default ImageBar;
