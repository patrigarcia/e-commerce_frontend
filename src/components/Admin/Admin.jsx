import { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Switch, Text, Flex, Card, Button, Grid } from "@chakra-ui/react";
import apiClient from "../../api/apiClient";
import "./Admin.scss";
import AdminAddProduct from "./AdminAddProduct";

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

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
            <Flex direction="column" alignItems="center" justifyContent="space-between">
                <Text className="titulo">Perfil de administrador</Text>

                <Card w="90%">
                    <Grid templateColumns="1fr 1fr" gap={4}>
                        <Box m={10} borderWidth="1px" borderRadius="lg">
                            <TableContainer>
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            <Th>ID</Th>
                                            <Th>Nombre</Th>
                                            <Th>Apellido</Th>
                                            <Th>Admin?</Th>
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
                            <Box mt={4} mb={4} display="flex" justifyContent="center">
                                <Button onClick={() => paginate(currentPage - 1)} isDisabled={currentPage === 1} mr={2}>
                                    Anterior
                                </Button>
                                <Button onClick={() => paginate(currentPage + 1)} isDisabled={indexOfLastUser >= totalUsers}>
                                    Siguiente
                                </Button>
                            </Box>
                        </Box>
                        <Box mt={4} p={5}>
                            <AdminAddProduct />
                        </Box>
                    </Grid>
                </Card>
            </Flex>
        </>
    );
};

export default Admin;
