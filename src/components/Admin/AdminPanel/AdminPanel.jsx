import { Text, Flex, UnorderedList, ListItem, Link, Button } from "@chakra-ui/react";
import { FaPlusCircle, FaArrowAltCircleRight, FaTrash, FaCheckCircle, FaDatabase } from "react-icons/fa";
import "./AdminPanel.scss";

const AdminPanel = ({ onAdminRoleClick, onAddCategoryClick, onAddProductClick, onUpdateProductClick, onGetProductsClick, onDeleteProductClick }) => {
    return (
        <>
            <Flex direction="row">
                <Flex direction="column" justifyContent="space-between">
                    <div className="aside">
                        <Text className="panel_title">Panel de administrador</Text>
                        <UnorderedList className="lista">
                            <ListItem>
                                <Button leftIcon={<FaCheckCircle />} className="link_panel" variant="ghost" onClick={() => onAdminRoleClick()}>
                                    PERMISOS
                                </Button>
                            </ListItem>

                            <ListItem>
                                <Button leftIcon={<FaPlusCircle />} variant="ghost" onClick={() => onAddCategoryClick()}>
                                    AGREGAR CATEGORÍA
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button leftIcon={<FaPlusCircle />} variant="ghost" onClick={() => onAddProductClick()}>
                                    AGREGAR PRODUCTO
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button leftIcon={<FaArrowAltCircleRight />} variant="ghost" onClick={() => onUpdateProductClick()}>
                                    ACTUALIZAR PRODUCTO
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button leftIcon={<FaDatabase />} variant="ghost" onClick={() => onGetProductsClick()}>
                                    VER PRODUCTOS
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button leftIcon={<FaTrash />} variant="ghost" onClick={() => onDeleteProductClick()}>
                                    ELIMINAR PRODUCTO
                                </Button>
                            </ListItem>
                        </UnorderedList>
                    </div>
                </Flex>
            </Flex>
        </>
    );
};

export default AdminPanel;
