import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Flex, Image, VStack, Text, Button, Card, Spinner, Box } from "@chakra-ui/react";
import { getImageURL } from "../../api/apiClient";
import { Link, useParams } from "react-router-dom";
import "./ProductPage.scss";

const ProductPage = () => {
    const { getProductById } = useContext(ProductsContext);
    const { productId } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await getProductById(productId);
            setProduct(productData);
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return (
            <div>
                <Text>Cargando...</Text>
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
            </div>
        );
    }

    return (
        <>
            <Box className="product_page">
                <Card w="50%" mt="8%" mb="10%" ml="25%">
                    <Text as="b" p="4%" fontSize="1.3em">
                        Detalles de producto
                    </Text>
                    <Flex justifyContent="center">
                        <VStack spacing={4} mb="10%">
                            <Text fontSize="1.2em" className="product-name" fontWeight="bold">
                                {product.name}
                            </Text>
                            <Image className="product-image" src={getImageURL(product.imagePath)} alt={product.name} />
                            <Text className="product-description">{product.description}</Text>
                            <Text as="b" fontSize="1.7em" className="product-price">
                                {product.price} €
                            </Text>
                            <Link mb="10%" to="/">
                                <Button colorScheme="purple">Volver</Button>
                            </Link>
                        </VStack>
                    </Flex>
                </Card>
            </Box>
        </>
    );
};

export default ProductPage;
