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
        <Card w="65%" p="3%" mt="8%" ml="17%">
            <Text as="b" fontSize="1.2em" pb="3%">
                Agregar una nueva categoría
            </Text>
            <FormControl>
                <FormLabel>Nombre:</FormLabel>
                <Input type="text" placeholder="Ingrese el nombre de la categoría que quiere crear" onChange={(e) => setNewCategoryName(e.target.value)} />
            </FormControl>
            <Button mt={3} onClick={handleCategoryAddition} colorScheme="purple">
                Crear categoría
            </Button>
            {error != "" && <p>{error}</p>}
        </Card>
    );
}

export default AddCategory;
