import { Text, UnorderedList, ListItem, Button, Box, Card } from "@chakra-ui/react";
import { FaPlusCircle, FaArrowAltCircleRight, FaTrash, FaCheckCircle, FaDatabase } from "react-icons/fa";

const AdminPanel = ({ onAdminRoleClick, onAddCategoryClick, onAddProductClick, onUpdateProductClick, onGetProductsClick, onDeleteProductClick }) => {
    return (
        <>
            <Card bg="rgba(255, 255, 255, 0.425);" borderRadius={0}>
                <Box as="aside" w="35vh" h="90vh" mt="15%">
                    <Text as="b" fontSize="1.3em" ml="10%">
                        Panel de administrador
                    </Text>

                    <UnorderedList listStyleType="none" mt="10%">
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
                </Box>
            </Card>
        </>
    );
};

export default AdminPanel;
