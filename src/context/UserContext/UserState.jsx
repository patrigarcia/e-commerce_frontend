import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";
import apiClient from "../../api/apiClient";

const token = localStorage.getItem("token");

const initialState = {
    token: token ? token : null,
    user: null,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    const login = async (user) => {
        const res = await apiClient.post("/users/login", user);

        dispatch({
            type: "LOGIN",
            payload: res.data,
        });

        if (res.data) {
            localStorage.setItem("token", res.data.token);
        }
    };

    const logout = async () => {
        const res = await apiClient.delete("/users/logout");

        dispatch({
            type: "LOGOUT",
            payload: res.data,
        });

        if (res.data) {
            localStorage.removeItem("token");
        }
    };

    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                login,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
