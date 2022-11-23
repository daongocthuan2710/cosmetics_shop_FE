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
        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const url = `${prefix}?accountId=${id}`;
        return axiosClient.get(url, header);
    },

    UpdateUser: ({token, id, ...rest}) => {
        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        console.log('body', rest);
        const url = `${prefix}?accountId=${id}`;
        return axiosClient.put(url, rest, header);
    },
};

export default userApi;