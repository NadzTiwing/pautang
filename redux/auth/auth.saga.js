import { takeLatest, call, put } from "redux-saga/effects";
import authActionType from "./auth.type";
import { loginAPI } from "../../api/auth";
import { loginSuccess, loginFail } from "./auth.actions";

function* loginSaga({ username, password }) {
    try {
        const user = yield call(loginAPI, username, password);
        yield put(loginSuccess(user.data[0]));
    } catch(error) {
        yield put(loginFail(error));
    }
}


export default function* watchLogin() {
    yield takeLatest(authActionType.LOGIN_CHECK, loginSaga);
}