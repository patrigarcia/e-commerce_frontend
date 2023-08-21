import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Flex, Grid, GridItem, Image, VStack, Text, Button } from "@chakra-ui/react";
import { getImageURL } from "../../api/apiClient";
import "./Products.scss";

const Products = () => {
    const { getProducts, products, addCart } = useContext(ProductsContext);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Flex justifyContent="center">
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
                {products.map((product) => (
                    <GridItem key={product.id}>
                        <div className="product-card">
                            <VStack spacing={4}>
                                <Text className="product-name" fontWeight="bold">
                                    {product.name}
                                </Text>
                                <Image className="product-image" src={getImageURL(product.imagePath)} alt={product.name} />
                                <Text className="product-description">{product.description}</Text>
                                <Text className="product-price">{product.price} €</Text>
                            </VStack>
                            <Button className="add-cart-button" colorScheme="purple" onClick={() => addCart(product)}>
                                Agregar al carrito
                            </Button>
                        </div>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    );
};

export default Products;
