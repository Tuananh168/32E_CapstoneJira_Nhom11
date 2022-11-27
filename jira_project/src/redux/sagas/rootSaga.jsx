import { all } from "redux-saga/effects";
import * as UserCyberbugSaga from "./Cyberbugs/UserCyberbugsSaga";

export function* rootSaga() {
  yield all([UserCyberbugSaga.theoDoiSignin()]);
}
