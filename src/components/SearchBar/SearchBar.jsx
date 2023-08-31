import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Box } from "@chakra-ui/react";
import { Search } from "react-search-box";

const SearchBar = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (value) => {
        setSearchTerm(value);

        const filteredResults = data.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

        setSearchResults(filteredResults);
    };

    return (
        <Box p={4}>
            <InputGroup>
                <Input placeholder="Buscar..." value={searchTerm} onChange={(e) => handleSearch(e.target.value)} />
                <InputRightElement>
                    <Search />
                </InputRightElement>
            </InputGroup>

            <Box mt={4}>
                {searchResults.map((result, index) => (
                    <p key={index}>{result}</p>
                ))}
            </Box>
        </Box>
    );
};

export default SearchBar;
