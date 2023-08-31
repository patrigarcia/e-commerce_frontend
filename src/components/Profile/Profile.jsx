import React from "react";
import { Grid, Text, GridItem, Card } from "@chakra-ui/react";
import ProfileInfo from "./ProfileInfo";
import UserOrders from "./UserOrder";

const Profile = () => {
    return (
        <Grid templateColumns={{ base: "1fr", md: "1fr 3fr" }}>
            <Card>
                <Text as="b" mt="10%" fontSize="1.7em" ml="30%">
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
