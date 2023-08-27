import { createContext } from "react";
import apiClient from "../../api/apiClient";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const createOrder = async (cart) => {
        const token = JSON.parse(localStorage.getItem("token"));
        try {
            await apiClient.post(
                "/orders/productId",
                { productIds: cart },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <OrdersContext.Provider
            value={{
                createOrder,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};
