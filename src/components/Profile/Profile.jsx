import React from "react";
import { Grid, Text, Box, GridItem, Card } from "@chakra-ui/react";
import ProfileInfo from "./ProfileInfo";
import UserOrders from "./UserOrder";

const Profile = () => {
    return (
        <Grid templateColumns={{ base: "1fr", md: "1fr 3fr" }}>
            <Card mt="10%">
                <Text as="b" fontSize="1.7em" ml="25%">
                    Mi cuenta
                </Text>
                <ProfileInfo />
            </Card>
            <GridItem w="60%">
                <UserOrders />
            </GridItem>
        </Grid>
    );
};

export default Profile;
