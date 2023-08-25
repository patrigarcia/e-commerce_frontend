import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Card, Text } from "@chakra-ui/react";
import useCategories from "../../../hooks/useCategories";
import "./AddCategory.scss";

function AddCategory() {
    const { addCategory } = useCategories();
    const [newCategoryName, setNewCategoryName] = useState("");
    const [error, setError] = useState("");

    const handleCategoryAddition = () => {
        if (newCategoryName === "") {
            setError("La categoría debe tener al menos un caracter!");
            return;
        }
        addCategory(newCategoryName);
        setError("");
    };

    return (
        <Box className="category_box">
            <Text className="cat_title">Agregar una categoría</Text>
            <Card p={6}>
                <FormControl>
                    <FormLabel>Nueva categoría</FormLabel>
                    <Input type="text" placeholder="Ingrese el nombre de la categoría que quiere crear" onChange={(e) => setNewCategoryName(e.target.value)} />
                </FormControl>
                <Button mt={3} onClick={handleCategoryAddition} colorScheme="purple">
                    Crear categoría
                </Button>
                {error != "" && <p>{error}</p>}
            </Card>
        </Box>
    );
}

export default AddCategory;
