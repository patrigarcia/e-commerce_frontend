import { Heading } from "@chakra-ui/react";

const CategoryHeading = ({ filterQuery }) => {
    const heading = filterQuery.categoryId ? `Viendo categoría ${filterQuery.categoryName}` : "Viendo todos los productos";
    return <Heading marginBottom={8}>{heading}</Heading>;
};

export default CategoryHeading;
