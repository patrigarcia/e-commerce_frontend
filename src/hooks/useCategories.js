import apiClient from "../api/apiClient";

const useCategories = () => {
    const addCategory = (category) => {
        apiClient.post("/categories", { name: category });
    };

    const fetchCategories = () => {
        return apiClient.get("/categories");
    };

    return { addCategory, fetchCategories };
};

export default useCategories;
