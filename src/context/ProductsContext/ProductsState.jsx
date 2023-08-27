import React, { createContext, useReducer, useEffect } from "react";
import apiClient from "../../api/apiClient";
import ProductsReducer from "./ProductsReducer";

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
    products: [],
    cart: cart,
};

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const getProducts = async () => {
        const res = await apiClient.get("/products/categories");
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
        });
        return res;
    };

    const getProductsByCategory = async (filterQuery) => {
        const res = await apiClient.get(`/categories/${filterQuery.categoryId}`);
        dispatch({
            type: "GET_PRODUCTS_BY_CATEGORY",
            payload: res.data,
        });
        return res;
    };

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        dispatch({
            type: "SET_CART",
            payload: savedCart,
        });
    }, []);

    const addCart = (product) => {
        dispatch({
            type: "ADD_CART",
            payload: product,
        });
        localStorage.setItem("cart", JSON.stringify([...state.cart, product]));
    };

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        });
        localStorage.setItem("cart", JSON.stringify([]));
    };

    const getProductById = async (productId) => {
        try {
            const res = await apiClient.get(`/products/id/${productId}`);
            return res.data;
        } catch (error) {
            console.error("Error fetching product by ID:", error);
            return null;
        }
    };

    return (
        <ProductsContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                getProducts,
                addCart,
                clearCart,
                getProductById,
                getProductsByCategory,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
