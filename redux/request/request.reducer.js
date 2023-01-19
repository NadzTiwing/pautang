import requestActionType from "./request.type";

const initialState = {
    amount: 0,
    error: null,
    isLoading: false,
    userId: null,
}

const debtReducer = (state = initialState, action) => {
    switch(action.type) {
        case requestActionType.REQUEST:
            return {
                ...state,
                amount: action.amount,
                isLoading: true,
                userId: action.userId,
            };
        case requestActionType.REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case requestActionType.REQUEST_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        default:
            return { ...state };
    }
}

export default debtReducer;