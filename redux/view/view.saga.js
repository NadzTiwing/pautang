import { takeLatest, call, put } from "redux-saga/effects";
import viewActionType from "./view.type";
import { viewDebtsAPI, viewUserDebtsAPI } from "../../api/debt";
import { getUsersAPI } from "../../api/users"; 
import { 
    getDebtsSuccess, getDebtsFail, 
    getUserDetailsSuccess, getUserDetailsFail 
} from "./view.actions";

function* viewAllDebtSaga() {
    try {
        const data = yield call(viewDebtsAPI);
        yield put(getDebtsSuccess(data));
    } catch(error) {
        yield put(getDebtsFail(error));
    }
}

function* viewUserDebtSaga({ userId }) {
    try {
        const data = yield call(viewUserDebtsAPI, userId);
        let totalDebt = 0;
        data.data.forEach(item => {
            if(item.status === "approved") {
                totalDebt += parseInt(item.amount);
            }
        });
        yield put(getDebtsSuccess(data.data, totalDebt));
    } catch(error) {
        yield put(getDebtsFail(error));
    }
}

function* viewUserDetailsSaga() {
    try {
        const users = yield call(getUsersAPI);
        yield put(getUserDetailsSuccess(users));
    } catch(error) {
        yield put(getUserDetailsFail(error));
    }
}

export default function* watchViewDebts() {
    yield takeLatest(viewActionType.GET_ALL_DEBTS, viewAllDebtSaga);
    yield takeLatest(viewActionType.GET_USER_DEBTS, viewUserDebtSaga);
    yield takeLatest(viewActionType.GET_USER_DETAILS, viewUserDetailsSaga);
}