import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import useCategories from "../../hooks/useCategories";

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
        <Box p={3}>
            <FormControl>
                <FormLabel>Nueva categoría</FormLabel>
                <Input type="text" placeholder="Ingrese el nombre de la nueva categoría" onChange={(e) => setNewCategoryName(e.target.value)} />
            </FormControl>
            <Button mt={3} onClick={handleCategoryAddition} colorScheme="purple">
                Crear categoría
            </Button>
            {error != "" && <p>{error}</p>}
        </Box>
    );
}

export default AddCategory;
