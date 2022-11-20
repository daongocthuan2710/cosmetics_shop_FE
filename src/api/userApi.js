import axiosClient from "./axiosClient";

const prefix = "/userInformation";

const userApi = {
 
    getAllUsers: (token) => {
        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const url = prefix;
        return axiosClient.get(url, header);
    },

    getUserById: ({token = undefined, id = null} = {}) => {
        console.log("token", token, );
        console.log("id", id, );
        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const url = `${prefix}?accountId=${id}`;
        return axiosClient.get(url, header);
    },
};

export default userApi;