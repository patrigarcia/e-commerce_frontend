import apiClient from "../api/apiClient";

const useCategories = () => {
    const addCategory = (category) => {
        apiClient.post("/categories", { name: category });
    };
    return { addCategory };
};

export default useCategories;
