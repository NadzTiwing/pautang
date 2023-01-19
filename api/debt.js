import axiosClient from "./axiosClient";

export const requestAPI = (userId, amount) => {
    return axiosClient({
        url: "/debts",
        method: "POST",
        data: { userId, amount, status: "pending" }
    });
}

export const viewDebtsAPI = () => {
    return axiosClient({
        url: "/debts",
        method: "GET",
    });
}

export const viewUserDebtsAPI = (userId) => {
    return axiosClient({
        url: `/debts?userId=${userId}`,
        method: "GET",
    });
}

export const payDebtAPI = (debtId) => {
    return axiosClient.get(`/debts/${debtId}`)
    .then( response => {
        response.data.status = "paid";
        return response.data;
    })
    .then( updatedData => {
        axiosClient.put(`/debts/${debtId}`, updatedData)
        .then( result => { return result })
    });
}