import React, { createContext, useContext, useEffect, useState } from "react";
import apiClient from "../../api/apiClient";

const CategoryContext = createContext();

function CategoryProvider({ children }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiClient.post("/categories");
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);

    return <CategoryContext.Provider value={{ categories }}>{children}</CategoryContext.Provider>;
}

function useCategoryContext() {
    return useContext(CategoryContext);
}

export { CategoryProvider, useCategoryContext };
