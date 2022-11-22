import axiosClient from "./axiosClient";

const prefix = "/order";

const orderApi = {
    createOrder: (body) => {
        const token = localStorage.getItem("token");

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const url = prefix;
        return axiosClient.post(url, body, header);
    },
    getAll: () => {
        const token = localStorage.getItem("token");

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const url = `${prefix}`;
        return axiosClient.get(url,header);
    }
};

export default orderApi;