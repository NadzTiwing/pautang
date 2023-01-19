import { takeLatest, call, put } from "redux-saga/effects";
import processActionType from "./process.type";
import { approveAPI, denyAPI, newDataAPI } from "../../api/process";
import { actionSuccess, actionFail } from "./process.actions";

function* approveSaga({ debtId }) {
    try {
        yield call(approveAPI, debtId);
        // const response = 
        // console.log("SAGA_RESULT:" +JSON.stringify(response));
        // if(response === "updated") {
        // //     const result = yield call(newDataAPI, debtId);
        // //     //yield put(actionSuccess, result);
        // }
    } catch(error) {
        yield put(actionFail(error));
    }
}

function* denySaga({ debtId }) {
    try {
        yield call(denyAPI, debtId);
    } catch(error) {
        yield put(actionFail(error));
    }
}

export default function* watchAdminProcess() {
    yield takeLatest(processActionType.APPROVE, approveSaga);
    yield takeLatest(processActionType.DENY, denySaga);
}