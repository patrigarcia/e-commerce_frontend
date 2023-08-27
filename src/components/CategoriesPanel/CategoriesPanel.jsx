import { Button, HStack, Heading, List, ListItem } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import useCategories from "../../hooks/useCategories";

const CategoriesPanel = ({ onSelectCategory, selectedCategoryId }) => {
    const [categories, setCategories] = useState([]);
    const { fetchCategories } = useCategories();

    useEffect(() => {
        fetchCategories().then((res) => setCategories(res.data));
    }, []);

    return (
        <>
            <Heading fontSize="2xl" marginBottom={5}>
                Categorías
            </Heading>
            <List styleType="none">
                {categories.map((category) => (
                    <ListItem key={category.id}>
                        <HStack paddingY="10px" paddingX="2px">
                            <FaPlusCircle />
                            <Button
                                fontWeight={category.id === selectedCategoryId ? "bold" : "normal"}
                                colorScheme={category.id === selectedCategoryId ? "whatsapp" : "normal"}
                                fontSize="lg"
                                variant="link"
                                onClick={() => onSelectCategory(category)}
                                whiteSpace="normal"
                                textAlign="left"
                            >
                                {category.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default CategoriesPanel;
