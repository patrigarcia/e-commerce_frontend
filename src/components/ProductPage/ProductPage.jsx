import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Flex, Image, VStack, Text, Button, Card, Spinner } from "@chakra-ui/react";
import { getImageURL } from "../../api/apiClient";
import { Link, useParams } from "react-router-dom";

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
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Detalles de producto
            </Text>
            <Flex justifyContent="center">
                <Card maxW="600px" p={4}>
                    <VStack spacing={4}>
                        <Text className="product-name" fontWeight="bold">
                            {product.name}
                        </Text>
                        <Image className="product-image" src={getImageURL(product.imagePath)} alt={product.name} />
                        <Text className="product-description">{product.description}</Text>
                        <Text className="product-price">{product.price} €</Text>
                        <Link to="/">
                            <Button colorScheme="gray">Volver</Button>
                        </Link>
                    </VStack>
                </Card>
            </Flex>
        </>
    );
};

export default ProductPage;
