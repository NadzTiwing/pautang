import axiosClient from "./axiosClient";

export const loginAPI = (username, password) => {
    return axiosClient({
        url: `/users?username=${username}`,
        method: "GET",
        credentials: { username, password }
    })
};

