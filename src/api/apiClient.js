import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://192.168.1.139:9001",
    withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers["Authorization"] = token ? token : "";
    return config;
});

export const getImageURL = (imagePath) => {
    return apiClient.getUri() + "/uploads/" + imagePath;
};

export default apiClient;
