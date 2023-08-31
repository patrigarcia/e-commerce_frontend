import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import apiClient from "../../../api/apiClient";

const FilterProductPrice = ({ onPriceFilter }) => {
    const [price, setPrice] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFilterClick = async () => {
        try {
            const response = await apiClient.get(`/products/price/${price}`);
            onPriceFilter(response.data);
            console.log(response);
            setErrorMessage("");
        } catch (error) {
            if (error.response && error.response.status === 404) {
                onPriceFilter([]);
                setErrorMessage("No hay productos con ese precio");
            } else {
                setErrorMessage("Salio un error al obtener los productos por precio");
            }
        }
    };

    return (
        <Box>
            <Text>Busca por precio:</Text>
            <Input type="text" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
            <Button onClick={handleFilterClick}>Filtrar</Button>
            {errorMessage && <p>{errorMessage}</p>}
        </Box>
    );
};

export default FilterProductPrice;
