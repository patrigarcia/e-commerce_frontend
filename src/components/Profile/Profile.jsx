import React, { useState } from "react";
import { Center, Heading, VStack } from "@chakra-ui/react";
import ProfileInfo from "./ProfileInfo";

const Profile = ({ user, token }) => {
    const [orders, setOrders] = useState([]);

    return (
        <>
            <Heading pt={8} ml={100} as="h2" size="lg">
                Mi cuenta
            </Heading>
            <ProfileInfo />
        </>
    );
};

export default Profile;
