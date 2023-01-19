import { takeLatest, call, put } from "redux-saga/effects";
import requestActionType from "./request.type";
import { requestAPI } from "../../api/debt";
import { 
    requestFail,
    requestSuccess
} from "./request.actions";

function* requestSaga({ userId, amount }) {
    try {
        yield call(requestAPI, userId, amount);
        yield put(requestSuccess());
    } catch(error) {
        yield put(requestFail(error));
    }
}

export default function* watchRequest() {
    yield takeLatest(requestActionType.REQUEST, requestSaga);
}