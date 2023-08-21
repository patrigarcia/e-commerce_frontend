import { useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Switch } from "@chakra-ui/react";
import apiClient from "../../api/apiClient";
import { useEffect } from "react";

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        apiClient.get("users/all").then((res) => setUsers(res.data));
    }, []);

    const handleAdminSwitch = (event) => {
        const userChanged = users.find((user) => user.id == event.target.id);
        userChanged.role = event.target.checked ? "admin" : "user";
        apiClient.put(`users/${userChanged.name}`, { role: userChanged.role });
        const newUsersState = [...users.filter((user) => user.id != event.target.id), userChanged];
        setUsers(newUsersState.sort((a, b) => a.id - b.id));
    };

    return (
        <Box w="60%" m={10} borderWidth="1px" borderRadius="lg">
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Nombre</Th>
                            <Th>Apellido</Th>
                            <Th>Admin?</Th>
                            <Th>Updated at</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user, index) => (
                            <Tr key={index}>
                                <Td>{user.id}</Td>
                                <Td>{user.name}</Td>
                                <Td>{user.surname}</Td>
                                <Td>{<Switch id={user.id} isChecked={user.role === "admin"} colorScheme="purple" onChange={handleAdminSwitch} />}</Td>
                                <Td>{user.updatedAt}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Admin;
