import axiosClient from "./axiosClient";

const prefix = "/account";

const accountApi = {
    
    getAllAccounts: () => {
        const token = localStorage.getItem("admintoken");
        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const url = prefix;
        return axiosClient.get(url, header);
    },
}
export default accountApi;