import processActionType from "./process.type";

const initialState = {
    data: [],
    error: null,
    isLoading: false
};

const processReducer = (state = initialState, action) => {
    switch(action.type) {
        case processActionType.APPROVE:
            return {
                ...state,
                isLoading: true,
                debtId: action.debtId
            };
        case processActionType.DENY:
            return {
                ...state,
                isLoading: true,
                debtId: action.debtId
            };
        case processActionType.ACTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        case processActionType.ACTION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default: return { ...state };
    }
}

export default processReducer;