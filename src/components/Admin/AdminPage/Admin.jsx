import { Text, Flex, UnorderedList, ListItem, Link, Button, Box } from "@chakra-ui/react";
import AdminPanel from "../AdminPanel/AdminPanel";
import AdminRole from "../AdminRole/AdminRole";
import "./Admin.scss";

const Admin = () => {
    return (
        <>
            <Flex className="page">
                <Box>
                    <AdminPanel />
                </Box>
                <Box ml={12}>
                    <AdminRole />
                </Box>
            </Flex>
        </>
    );
};

export default Admin;
