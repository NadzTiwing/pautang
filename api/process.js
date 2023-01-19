import axiosClient from "./axiosClient";

export const approveAPI = (debtId) => {
    return axiosClient.get(`/debts/${debtId}`)
    .then( response => {
        response.data.status = "approved";
        return response.data;
    })
    .then( updatedData => {
        //return axiosClient.put(`/debts/${debtId}`, updatedData);
        axiosClient.put(`/debts/${debtId}`, updatedData)
        .then( result => { return result })
    });
}

export const denyAPI = (debtId) => {
    return axiosClient.get(`/debts/${debtId}`)
    .then( response => {
        response.data.status = "denied";
        return response.data;
    })
    .then( updatedData => {
        axiosClient.put(`/debts/${debtId}`, updatedData)
        .then( result => { return result })
    });
}