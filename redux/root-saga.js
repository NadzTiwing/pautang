// import { all, fork } from "redux-saga/effects";
// import authSagas from "./auth/auth.saga";

// export default function* rootSaga() {
//     yield all([
//         fork(authSagas)
//     ]);
// }

import { all, fork } from 'redux-saga/effects';
import watchLogin from './auth/auth.saga';
import watchRequest from './request/request.saga';
import watchViewDebts from './view/view.saga';
import watchAdminProcess from './admin/process.saga';
import watchPayment from './pay/pay.saga';

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchRequest),
    fork(watchViewDebts),
    fork(watchAdminProcess),
    fork(watchPayment)
  ]);
}