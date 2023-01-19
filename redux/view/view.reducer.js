import viewActionType from "./view.type";

const initialState = {
    error: null,
    isLoading: false,
    userId: null,
    totalDebt: 0,
    users: [],
    data: []
}

const viewReducer = (state = initialState, action) => {
    switch(action.type) {
        // case viewActionType.GET_ALL_DEBTS: 
        //     return {
        //         ...state,
        //         data: action.data            
        //     }
        case viewActionType.GET_USER_DEBTS:
            return {
                ...state,
                userId: action.userId,
                isLoading: true,
            }
            case viewActionType.GET_DEBTS_SUCCESS:
                return {
                    ...state,
                    data: action.data,
                    isLoading: false,
                    totalDebt: action.totalDebt
                }
        case viewActionType.GET_DEBTS_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        case viewActionType.GET_USER_DETAILS:
            return {
                ...state,
                isLoading: true
            };
        case viewActionType.GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.users
            };
        case viewActionType.GET_USER_DETAILS_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        default:
            return { ...state };
    }
}

export default viewReducer;