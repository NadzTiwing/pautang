// import { combineReducers } from "redux";
// import authReducer from "./auth/auth.reducer";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import persistReducer from "redux-persist/es/persistReducer";

// const persistConfig = {
//     key: "root",
//     storage: AsyncStorage,
//     whitelist: ["auth"],
// };

// const appReducer = combineReducers({
//     auth: authReducer
// });

// const rootReducer = (state, action) => {
//     //todo: reset state when user log out

//     return appReducer(state, action);
// }

// export default persistReducer(persistConfig, rootReducer);

import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import requestReducer from './request/request.reducer';
import viewReducer from './view/view.reducer';
import processReducer from './admin/process.reducer';
import payReducer from './pay/pay.reducer';

export default combineReducers({
    login: authReducer,
    request: requestReducer,
    view: viewReducer,
    process: processReducer,
    pay: payReducer
});