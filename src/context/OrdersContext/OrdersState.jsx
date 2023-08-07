import { createContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:9000";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const createOrder = async (cart) => {
        const token = JSON.parse(localStorage.getItem("token"));
        try {
            await axios.post(
                API_URL + "/orders/productId",
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
