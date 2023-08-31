import { useState } from "react";
import { Flex, Box, Divider, Card, HStack } from "@chakra-ui/react";
import ImageBar from "../ImageBar/ImageBar";
import Products from "../Products/Products";
import CategoryHeading from "../CategoryHeading/CategoryHeading";
import CategoriesPanel from "../CategoriesPanel/CategoriesPanel";
import FilterProductPrice from "../Products/FilterProductsPrice/FilterProductsPrice";
import SortProducts from "../Products/SortProducts/SortProducts";
import "./Home.scss";

const Home = () => {
    const initialFilterState = { categoryId: null, categoryName: null, price: null };
    const [filterQuery, setFilterQuery] = useState(initialFilterState);
    const [sortBy, setSortBy] = useState("priceHighToLow");

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

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
                    <Card flex="1" p={4} mt={10}>
                        <Box as="main">
                            <CategoryHeading filterQuery={filterQuery} />
                            <Divider mb={4} />
                            <HStack>
                                <SortProducts sortBy={sortBy} onSortChange={handleSortChange} />
                                <FilterProductPrice onPriceFilter={(price) => setFilterQuery({ ...filterQuery, price: price })} />
                            </HStack>
                            <Products filterQuery={filterQuery} sortCriteria={sortBy} />
                        </Box>
                    </Card>
                </Flex>
            </Box>
        </>
    );
};

export default Home;
