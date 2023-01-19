import payActionType from "./pay.type";

const initialState = {
    data: [],
    error: null,
    isLoading: false,
}

const payReducer = (state = initialState, action) => {
    switch(action.type) {
        case payActionType.PAY:
            return {
                ...state,
                isLoading: true,
                debtId: action.debtId,
            };
        case payActionType.PAY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: data,
            };
        case payActionType.PAY_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        default:
            return { ...state };
    }
}

export default payReducer;