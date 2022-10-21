import axiosClient from "./axiosClient.js";

const prefix = "/category";

const cateApi = {
    getAll: () => {
        const url = prefix;
        return axiosClient.get(url);
    },
    getCateById: (id) => {
        const url = `${prefix}/${id}`;
        return axiosClient.get(url);
    },
};

export default cateApi;