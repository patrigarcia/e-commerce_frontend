import { Box, Text, Flex } from "@chakra-ui/react";

import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import UpdateProduct from "./UpdateProduct";

const Admin = () => {
    return (
        <>
            <Flex direction="row">
                <aside className="aside">
                    <ul className="nav-links">
                        <li>
                            <a href="#">Enlace 1</a>
                        </li>
                        <li>
                            <a href="#">Enlace 2</a>
                        </li>
                        <li>
                            <a href="#">Enlace 3</a>
                        </li>
                        <li>
                            <a href="#">Enlace 4</a>
                        </li>
                        <li>
                            <a href="#">Enlace 5</a>
                        </li>
                    </ul>
                </aside>

                <main>
                    <Flex direction="column" justifyContent="space-between">
                        <Text className="titulo">Perfil de administrador</Text>

                        <Box p={3} borderWidth="1px" borderRadius="lg">
                            <AddCategory />
                        </Box>

                        <Box mt={4} p={5}>
                            <AddProduct />
                        </Box>
                        <Box mt={4} p={5}>
                            <UpdateProduct />
                        </Box>
                    </Flex>
                </main>
            </Flex>
        </>
    );
};

export default Admin;
