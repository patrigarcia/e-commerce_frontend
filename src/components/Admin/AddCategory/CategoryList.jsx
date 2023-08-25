import React, { useState, useEffect } from "react";
import { Box, Text, Spinner, FormControl, Select } from "@chakra-ui/react";
import apiClient from "../../../api/apiClient";

function CategoryList({ onSelectCategory }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await apiClient.get("/categories");
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }

        fetchCategories();
    }, []);

    return (
        <Box>
            {loading ? (
                <Spinner />
            ) : (
                <FormControl>
                    <Select onChange={onSelectCategory}>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            )}
        </Box>
    );
}

export default CategoryList;
