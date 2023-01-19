import payActionType from "./pay.type";

export const pay = (debtId) => ({
    type: payActionType.PAY,
    debtId,
});

export const paySuccess = (data) => ({
    type: payActionType.PAY_SUCCESS,
    data
});

export const payFail = (error) => ({
    type: payActionType.PAY_FAIL,
    error
});

