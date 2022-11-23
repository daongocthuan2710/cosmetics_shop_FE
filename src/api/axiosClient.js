// http client for our website
import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});
    
axiosClient.interceptors.request.use(async (config) => {
    //Handle token here ...
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        // switch (error?.response?.status) {
        //     case 500:
        //         console.log("❎ Server error");
        //         break;
        //     default:
        //         console.log("❎ Something went wrong ❎");
        //         console.log("❎ -------------------- ❎");
        //         console.log("➡️ URL: " + error.response.config.url);
        //         console.log("➡️ HTTP Code: " + error.response.status);
        //         console.log("➡️ HTTP Message: " + error.response.statusText);
        //         console.log("❎ -------------------- ❎");
        //         return error.response;
        // }

        // return Promise.reject(error);

        // Handle errors
        throw error;
    }
);

export default axiosClient;