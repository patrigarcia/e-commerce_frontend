import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
    products: [],
    cart: cart,
};

const API_URL = "http://192.168.1.139:9001";
export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const getProducts = async () => {
        const res = await axios.get(API_URL + "/products/categories");
        dispatch({
            type: "GET_PRODUCTS",
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
            const res = await axios.get(API_URL + `/products/id/${productId}`);
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
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
