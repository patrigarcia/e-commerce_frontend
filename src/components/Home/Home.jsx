import { useState } from "react";
import { Flex, Box, Divider } from "@chakra-ui/react";
import ImageBar from "../ImageBar/ImageBar";
import Products from "../Products/Products";
import CategoryHeading from "../CategoryHeading/CategoryHeading";
import CategoriesPanel from "../CategoriesPanel/CategoriesPanel";
import "./Home.scss";

const Home = () => {
    const initialFilterState = { categoryId: null, categoryName: null };
    const [filterQuery, setFilterQuery] = useState(initialFilterState);

    return (
        <>
            <Box>
                <ImageBar width="100%" />
                <Flex>
                    <Box as="aside" w="200px" p={4} borderRight="1px solid #ccc" mt={10}>
                        <CategoriesPanel
                            selectedCategoryId={filterQuery.categoryId}
                            onSelectCategory={(category) => setFilterQuery({ ...filterQuery, categoryId: category.id, categoryName: category.name })}
                        />
                    </Box>
                    <Box flex="1" p={4} mt={10}>
                        <Box as="main">
                            <CategoryHeading filterQuery={filterQuery} />
                            <Divider mb={4} />
                            <Products filterQuery={filterQuery} />
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Home;
