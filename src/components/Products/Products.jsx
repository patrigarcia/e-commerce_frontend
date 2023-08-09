import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Box, Text, Button } from "@chakra-ui/react";


const Products = () => {
    const { getProducts, products, addCart, cart } = useContext(ProductsContext);

    //se ejecuta cada vez que se monta el componente
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Box className="products-container">
            {products.map((product) => {
                return (
                    <Box key={product._id} borderWidth="1px" borderRadius="lg" p={4} borderColor="pink" maxWidth="300px" mb={4}>
                        <Text fontSize="xl" fontWeight="bold">
                            {product.name}
                        </Text>
                        <Text>{product.price} €</Text>
                        {/* metemos addCart dentro de una función para que no se ejecute al cargar el componente */}
                        <Button colorScheme="blue" mt={4} onClick={() => addCart(product)}>
                            Add cart
                        </Button>
                    </Box>
                );
            })}
        </Box>
    );
};

export default Products;
