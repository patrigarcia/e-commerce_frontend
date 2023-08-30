import React from "react";
import { Flex, Card, Text, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OrderCompleted = () => {
    return (
        <Card w="50%" h="30%" ml="55%" mt="12%">
            <Center>
                <Text as="b" m="10%" fontSize="1.3em">
                    Tu pedido ha sido procesado!
                    <br /> Puedes verlo en tu{" "}
                    <Link color="purple.500" to="/profile">
                        perfil
                    </Link>
                </Text>
            </Center>

            <Center>
                <Button colorScheme="purple" w="50%">
                    <Link to="/">Seguir comprando</Link>
                </Button>
            </Center>
        </Card>
    );
};

export default OrderCompleted;
