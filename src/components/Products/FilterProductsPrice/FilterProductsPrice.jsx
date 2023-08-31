import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import apiClient from "../../../api/apiClient";

const FilterProductPrice = ({ onPriceFilter }) => {
    const [price, setPrice] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFilterClick = async () => {
        if (!price) {
            setErrorMessage("Añade un precio primero");
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
            return;
        }
        try {
            const response = await apiClient.get(`/products/price/${price}`);
            onPriceFilter(response.data);
            console.log(response);
            setErrorMessage("");
        } catch (error) {
            if (error.response && error.response.status === 404) {
                onPriceFilter([]);
                setTimeout(() => {
                    setErrorMessage("");
                }, 3000);
            } else {
                setErrorMessage("Hubo un error al obtener los productos por precio");
            }
        }
    };

    return (
        <Box ml="22%" mb="2%">
            <HStack justifyContent="space-between">
                <Text w="75%">Busca por precio:</Text>
                <Input type="text" placeholder="Precio €" isRequired value={price} onChange={(e) => setPrice(e.target.value)} />

                <Button colorScheme="purple" w="40%" onClick={handleFilterClick}>
                    Filtrar
                </Button>
            </HStack>
            {errorMessage && <p>{errorMessage}</p>}
        </Box>
    );
};

export default FilterProductPrice;
