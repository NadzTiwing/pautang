import viewActionType from "./view.type";

export const getUserDebts = (userId) => ({
    type: viewActionType.GET_USER_DEBTS,
    userId
});

export const getAllDebts = () => ({
    type: viewActionType.GET_ALL_DEBTS
});

export const getDebtsSuccess = (data, totalDebt) => ({
    type: viewActionType.GET_DEBTS_SUCCESS,
    data,
    totalDebt
});

export const getDebtsFail = (error) => ({
    type: viewActionType.GET_DEBTS_FAIL,
    error
});

export const getUserDetails = () => ({
    type: viewActionType.GET_USER_DETAILS,
});

export const getUserDetailsSuccess = (users) => ({
    type: viewActionType.GET_USER_DETAILS_SUCCESS,
    users
});

export const getUserDetailsFail = (error) => ({
    type: viewActionType.GET_USER_DETAILS_FAIL,
    error
});
