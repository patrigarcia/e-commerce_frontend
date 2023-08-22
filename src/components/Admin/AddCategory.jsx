import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { CategoryContext } from "../../context/CategoryContext";
import apiClient from "../../api/apiClient";

function AddCategory() {
    const { categories } = CategoryContext();
    const [newCategoryName, setNewCategoryName] = useState("");

    const handleCreateCategory = async () => {
        try {
            const response = await apiClient.post("/categories", { name: newCategoryName });
            const data = await response.json();
            const newCategory = data.category;

            setNewCategoryName("");

            categories.push(newCategory);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box>
            <FormControl>
                <FormLabel>Nueva categoría</FormLabel>
                <Input type="text" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} />
            </FormControl>
            <Button onClick={handleCreateCategory}>Crear categoría</Button>
        </Box>
    );
}

export default AddCategory;
