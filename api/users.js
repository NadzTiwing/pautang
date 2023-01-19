import axiosClient from "./axiosClient";

export const getUsersAPI = () => {
    return axiosClient({
        url: `/users/`,
        method: "GET",
    });
}