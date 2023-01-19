import requestActionType from "./request.type";

export const request = (userId, amount) => ({
    type: requestActionType.REQUEST,
    userId,
    amount
});

export const requestSuccess = () => ({
    type: requestActionType.REQUEST_SUCCESS,
});

export const requestFail = (error) => ({
    type: requestActionType.REQUEST_FAIL,
    error
});

