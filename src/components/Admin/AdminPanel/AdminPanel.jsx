import { Text, UnorderedList, ListItem, Button, Box } from "@chakra-ui/react";
import { FaPlusCircle, FaArrowAltCircleRight, FaTrash, FaCheckCircle, FaDatabase } from "react-icons/fa";

const AdminPanel = ({ onAdminRoleClick, onAddCategoryClick, onAddProductClick, onUpdateProductClick, onGetProductsClick, onDeleteProductClick }) => {
    return (
        <>
            <Box as="aside" bg="rgba(255, 255, 255, 0.425);" w="35vh" h="90vh">
                <Text as="b" fontSize="1.3em" pt="8%">
                    Panel de administrador
                </Text>
                <UnorderedList listStyleType="none">
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
        </>
    );
};

export default AdminPanel;
