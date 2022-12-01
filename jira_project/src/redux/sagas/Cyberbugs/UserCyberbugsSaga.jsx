import Axios from "axios";
import {
  call,
  delay,
  takeLatest,
  takeEvery,
  put,
  fork,
  take,
  select,
} from "redux-saga/effects";
import { cyberBugsService } from "../../../services/CyberBugsService";
import { ACCESS_TOKEN, USER_LOGIN } from "../../../utils/setting/config";
import {
  LOGIN_ACTION,
  USER_SIGNIN_SAGA,
} from "../../constants/CyberBugs/CyberBugs";

// Quản lý các action Saga

function* signinSaga(action) {
  console.log(action.user);
  try {
    const { data, status } = yield call(() =>
      cyberBugsService.UserCyberBugs(action.user)
    );
    // Lưu vào LocalStore..
    localStorage.setItem(ACCESS_TOKEN, data.content.accessToken);
    localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

    yield put({
      type: LOGIN_ACTION,
      data: data.content,
    });

    let history = yield select((state) => state.HistoryReducer.history);
    history("/projectManagement");

    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
}

export function* theoDoiSignin() {
  yield takeLatest(USER_SIGNIN_SAGA, signinSaga);
}
