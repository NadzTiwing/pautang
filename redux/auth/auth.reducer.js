import authActionType from "./auth.type";

const initialState = {
    error: null,
    isLoading: false,
    isAuthenticated: false,
    sessionToken: null,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case authActionType.LOGIN_CHECK: 
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case authActionType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: {
                    id: action.user.id, 
                    name: action.user.name,
                    username: action.user.username
                },
                sessionToken: action.user.id
            };
        case authActionType.LOGIN_FAIL: 
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case authActionType.LOG_OUT: 
            return {
                ...state,
                isAuthenticated: false,
                sessionToken: null,
                user: null
            }
        default: 
            return state;
    }
};

export default authReducer;