import axiosClient from "./axiosClient.js";

const prefix = "/type";

const typeApi = {
    // getAll: () => {
    //     const url = prefix;
    //     return axiosClient.get(url);
    // },
    getTypeByCategoryId: (cateId) => {
        const url = `${prefix}?idCategory=${cateId}`;
        return axiosClient.get(url);
    },
};

export default typeApi;