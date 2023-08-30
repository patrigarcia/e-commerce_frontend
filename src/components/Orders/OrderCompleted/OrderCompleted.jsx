import React from "react";
import { Card, Text, Button, Center, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OrderCompleted = () => {
    return (
        <Card w="80%" h="fit-content" pb="5vh" ml="60%" mt="12vh" mb="50vh">
            <Center>
                <Text textAlign="center" mt="10%" fontSize="1.3em">
                    Tu pedido ha sido procesado!
                    <br /> Puedes verlo en tu{" "}
                    <Link to="/profile" style={{ color: "rgba(255, 0, 218, 1)", fontWeight: "bold" }}>
                        perfil
                    </Link>
                </Text>
            </Center>
            <Image src="src/assets/orderSuccess.png" w="70%" ml="16%" />

            <Center>
                <Button colorScheme="purple" w="50%">
                    <Link to="/">Seguir comprando</Link>
                </Button>
            </Center>
        </Card>
    );
};

export default OrderCompleted;
