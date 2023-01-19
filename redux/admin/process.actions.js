import processActionType from "./process.type";

export const approve = (debtId) => ({
    type: processActionType.APPROVE,
    debtId
});

export const deny = (debtId) => ({
    type: processActionType.DENY,
    debtId
});

export const actionSuccess = (data) => ({
    type: processActionType.ACTION_SUCCESS,
    data
});

export const actionFail = (error) => ({
    type: processActionType.ACTION_FAIL,
    error
});