import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

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
        onPriceFilter(price);
    };

    return (
        <Box ml="22%" mb="2%">
            <HStack justifyContent="space-between">
                <Text w="80%">Buscar por precio:</Text>
                <Input type="number" placeholder="Precio €" isRequired value={price} onChange={(e) => setPrice(e.target.value)} />
                <Button colorScheme="purple" w="40%" onClick={handleFilterClick}>
                    Filtrar
                </Button>
            </HStack>
            {errorMessage && <p>{errorMessage}</p>}
        </Box>
    );
};

export default FilterProductPrice;
