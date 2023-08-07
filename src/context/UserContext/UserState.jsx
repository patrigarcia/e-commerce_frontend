import axios from "axios";
import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    token: token ? token : null,
    user: null,
};

const API_URL = "http://localhost:9000";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const login = async (user) => {
        const res = await axios.post(API_URL + "/users/login", user);
        //guardamos token en el estado
        dispatch({
            type: "LOGIN",
            payload: res.data,
        });
        if (res.data) {
            //guardamos token en el localStorage
            localStorage.setItem("token", JSON.stringify(res.data.token));
        }
    };

    const getUserInfo = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.get(
            API_URL + "/users/all", //*chequear que la ruta sea la misma que en el back
            {
                headers: {
                    authorization: token,
                },
            }
        );
        dispatch({
            type: "GET_USER_INFO",
            payload: res.data,
        });
    };

    const logout = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.delete(API_URL + "/users/logout", {
            headers: {
                authorization: token,
            },
        });
        dispatch({
            //vaciamos el estado
            type: "LOGOUT",
            payload: res.data,
        });
        if (res.data) {
            //borramos el token del localStorage
            localStorage.removeItem("token");
        }
    };

    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                login,
                getUserInfo,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
