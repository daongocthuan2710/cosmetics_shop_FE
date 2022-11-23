import axiosClient from "./axiosClient";

const prefix = "/order";

const orderApi = { 
    createOrder: ({token,...rest}) => {

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const url = prefix;
        return axiosClient.post(url, rest, header);
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