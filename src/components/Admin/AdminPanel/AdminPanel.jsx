import { Text, Flex, UnorderedList, ListItem, Link, Button } from "@chakra-ui/react";
import AddCategory from "../AddCategory/AddCategory";
import AddProduct from "../AddProduct/AddProduct";
import AdminRole from "../AdminRole/AdminRole";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import "./AdminPanel.scss";

const AdminPanel = () => {
    return (
        <>
            <Flex direction="row">
                <Flex direction="column" justifyContent="space-between">
                    <aside className="aside">
                        <Text className="panel_title">Panel de administrador</Text>
                        <UnorderedList className="lista">
                            <ListItem>
                                <Link to={<AdminRole />}>
                                    <Button className="link_panel" variant="ghost" colorScheme="purple">
                                        PERMISOS
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to={<AddProduct />}>
                                    <Button className="link_panel" variant="ghost" colorScheme="purple">
                                        AGREGAR PRODUCTO
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to={<AddCategory />}>
                                    <Button className="link_panel" variant="ghost" colorScheme="purple">
                                        AGREGAR CATEGORÍA
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to={<UpdateProduct />}>
                                    <Button className="link_panel" variant="ghost" colorScheme="purple">
                                        ACTUALIZAR PRODUCTO
                                    </Button>
                                </Link>
                            </ListItem>
                        </UnorderedList>
                    </aside>
                </Flex>
            </Flex>
        </>
    );
};

export default AdminPanel;
