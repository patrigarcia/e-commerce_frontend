import React from "react";
import { Grid, Text, GridItem, Card } from "@chakra-ui/react";
import ProfileInfo from "./ProfileInfo";
import UserOrders from "./UserOrder";

const Profile = () => {
    return (
        <Grid templateColumns={{ base: "2fr", md: "1fr 3fr" }}>
            <GridItem>
                <Card mt={10} ml={4}>
                    <Text as="b" mt="10%" fontSize="1.7em" ml="30%">
                        Mi cuenta
                    </Text>
                    <ProfileInfo />
                </Card>
            </GridItem>
            <GridItem>
                <Card mt={10} mb={10} ml={4} mr={4}>
                    <Text as="b" ml="3%" mt="3%" mb={10} fontSize="1.5em">
                        Estos son tus pedidos
                    </Text>
                    <UserOrders />
                </Card>
            </GridItem>
        </Grid>
    );
};

export default Profile;
