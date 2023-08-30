import { Text } from "@chakra-ui/react";

const CategoryHeading = ({ filterQuery }) => {
    const heading = filterQuery.categoryId ? ` ${filterQuery.categoryName}` : "Viendo todos los productos";
    return (
        <Text as="b" fontSize="1.5em" pb="6%">
            {heading}
        </Text>
    );
};

export default CategoryHeading;
