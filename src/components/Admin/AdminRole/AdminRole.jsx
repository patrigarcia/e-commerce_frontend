import { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Switch, Text, Flex, Card, Button, Grid } from "@chakra-ui/react";
import apiClient from "../../../api/apiClient";
import "./AdminRole.scss";

const AdminRole = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 8;

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
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalUsers = users.length;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Card w="70%" ml="15%" mt="8%" mb="5%">
                <Text as="b" ml="3%" p="3%" fontSize="1.2em">
                    Cambiar el rol del usuario
                </Text>
                <TableContainer>
                    <Table variant="striped" colorScheme="purple">
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Nombre</Th>
                                <Th>Apellido</Th>
                                <Th>AdminRole?</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {currentUsers.map((user, index) => (
                                <Tr key={index}>
                                    <Td>{user.id}</Td>
                                    <Td>{user.name}</Td>
                                    <Td>{user.surname}</Td>
                                    <Td>
                                        <Switch id={user.id} isChecked={user.role === "admin"} colorScheme="purple" onChange={handleAdminSwitch} />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Box mt="3%" mb="3%" display="flex" justifyContent="center">
                    <Button variant="ghost" colorScheme="purple" onClick={() => paginate(currentPage - 1)} isDisabled={currentPage === 1} mr={1}>
                        Anterior
                    </Button>
                    <Button variant="ghost" colorScheme="purple" onClick={() => paginate(currentPage + 1)} isDisabled={indexOfLastUser >= totalUsers}>
                        Siguiente
                    </Button>
                </Box>
            </Card>
        </>
    );
};

export default AdminRole;
