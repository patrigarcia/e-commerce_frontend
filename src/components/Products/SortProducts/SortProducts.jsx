import React from "react";
import { Select } from "@chakra-ui/react";

const SortProducts = ({ sortBy, onSortChange }) => {
    return (
        <Select value={sortBy} onChange={onSortChange} width="35%" mb="20px">
            <option value="priceHighToLow">Ordenar por: Precio (mayor a menor)</option>
            <option value="priceLowToHigh">Ordenar por: Precio (menor a mayor)</option>
        </Select>
    );
};

export default SortProducts;
