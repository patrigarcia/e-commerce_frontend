import { Button, HStack, Heading, List, ListItem } from "@chakra-ui/react";
import { BiSolidGame } from "react-icons/bi";
import { useState, useEffect } from "react";
import useCategories from "../../hooks/useCategories";

const CategoriesPanel = ({ onSelectCategory, selectedCategoryId }) => {
    const [categories, setCategories] = useState([]);
    const { fetchCategories } = useCategories();
    const isSelectedCategoryNull = selectedCategoryId == null || selectedCategoryId == undefined;

    useEffect(() => {
        fetchCategories().then((res) => setCategories(res.data));
    }, []);

    return (
        <>
            <Heading fontSize="2xl" marginBottom={5}>
                Categorías
            </Heading>
            <List styleType="none">
                <ListItem>
                    <HStack paddingY="10px" paddingX="2px">
                        {isSelectedCategoryNull && <BiSolidGame />}
                        <Button
                            fontWeight={isSelectedCategoryNull ? "bold" : "normal"}
                            colorScheme={isSelectedCategoryNull ? "purple" : "normal"}
                            fontSize="lg"
                            variant="link"
                            onClick={() => onSelectCategory({ categoryId: null, categoryName: null })}
                            whiteSpace="normal"
                            textAlign="left"
                        >
                            VER TODO
                        </Button>
                    </HStack>
                </ListItem>
                {categories.map((category) => (
                    <ListItem key={category.id}>
                        <HStack paddingY="10px" paddingX="2px">
                            {category.id === selectedCategoryId && <BiSolidGame />}
                            <Button
                                fontWeight={category.id === selectedCategoryId ? "bold" : "normal"}
                                colorScheme={category.id === selectedCategoryId ? "purple" : "normal"}
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
