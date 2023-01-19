import { takeLatest, call, put } from "redux-saga/effects";
import payActionType from "./pay.type";
import { payDebtAPI } from "../../api/debt";
import { payFail } from "./pay.actions";

function* paySaga({ debtId }) {
    try {
        yield call(payDebtAPI, debtId);
    } catch(error) {
        yield put(payFail(error));
    }
}

export default function* watchPayment() {
    yield takeLatest(payActionType.PAY, paySaga);
}