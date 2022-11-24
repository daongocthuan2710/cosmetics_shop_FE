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
        const token = localStorage.getItem("admintoken");

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const url = `${prefix}`;
        return axiosClient.get(url,header);
    },
    confirmOrder: (id) => {
        const token = localStorage.getItem("admintoken");
        const accountid = localStorage.getItem("adminid");
        const body = {
            id_account: accountid,
            id_status: 2
        }
        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const url = `${prefix}/`+ id;
        return axiosClient.put(url,body,header);
    }
};

export default orderApi;