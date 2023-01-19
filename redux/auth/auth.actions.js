import authActionType from "./auth.type";

export const login = (username, password) => ({
    type: authActionType.LOGIN_CHECK,
    username, 
    password 
});

export const loginSuccess = (user) => ({
    type: authActionType.LOGIN_SUCCESS,
    user //{ id, name}
});

export const loginFail = (error) => ({
    type: authActionType.LOGIN_FAIL,
    error
});

// export const setSessionToken = (token) => ({
//     type: authActionType.SET_SESSION_TOKEN,
//     token
// }); 

export const logout = () => ({
    type: authActionType.LOG_OUT
});

