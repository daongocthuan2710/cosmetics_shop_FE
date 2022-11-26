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
    },
    getAllNoShipper: () => {
        const token = localStorage.getItem("shippertoken");

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const url = `${prefix}?status=2`;
        return axiosClient.get(url,header);
    },
    getAllOrderShipper: () => {
        const token = localStorage.getItem("shippertoken");
        const accountid = localStorage.getItem("shipperid");

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const url = `${prefix}?accountId=`+accountid;
        return axiosClient.get(url,header);
    },
    updateOrders: (id,status) => {
        const token = localStorage.getItem("shippertoken");
        const accountid = localStorage.getItem("shipperid");
        const body = {
            id_account: accountid,
            id_status: status
        }
        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const url = `${prefix}/`+ id;
        return axiosClient.put(url,body,header);
    },
};

export default orderApi;