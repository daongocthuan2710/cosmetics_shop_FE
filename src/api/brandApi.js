import axiosClient from "./axiosClient.js";

const prefix = "/brand";

const brandApi = {
    getAll: () => {
        const url = prefix;
        return axiosClient.get(url);
    },
    getBrandById: (id) => {
        const url = `${prefix}/${id}`;
        return axiosClient.get(url);
    },
};

export default brandApi;