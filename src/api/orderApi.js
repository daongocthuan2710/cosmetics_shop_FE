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
    getAll: ({token = undefined}) => {

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const url = `${prefix}`;
        return axiosClient.get(url,header);
    },
    getOrderDetail: ({token = undefined, orderId = undefined}) => {

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const url = `${prefix}/${orderId}/detail`;
        return axiosClient.get(url,header);
    },
    getOrdersByAccount: ({token = undefined, id = undefined}) => {

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const url = `${prefix}?accountId=${id}`;
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