import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";
import apiClient from "../../api/apiClient";

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    token: token ? token : null,
    user: user ? user : null,
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
            localStorage.setItem("user", JSON.stringify(res.data.user));
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
            localStorage.removeItem("user");
        }
    };

    const setUser = async (user) => {
        await apiClient.put(`/users/${user.name}`, user);

        dispatch({
            type: "USER",
            payload: user,
        });
    };

    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                login,
                logout,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
