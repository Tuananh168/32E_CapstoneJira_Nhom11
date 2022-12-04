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
import { projectCyberBugsSevice } from "../../../services/ProjectCyberBugsService";
import { notifiFuntion } from "../../../utils/Notification/Notification";
import { ACCESS_TOKEN, USER_LOGIN } from "../../../utils/setting/config";
import {
  ADD_USER_PROJECT_SAGA,
  GET_ADD_USER_SAGA,
  LOGIN_ACTION,
  REMOVE_USER_PROJECT_SAGA,
  USER_SIGNIN_SAGA,
  USER_SIGNUP_SAGA,
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

// Add User...

function* getUserSaga(action) {
  try {
    const { data, status } = yield call(() =>
      cyberBugsService.GetUser(action.keyword)
    );

    if (status === 200) {
      yield put({
        type: "GET_USER_SEARCH",
        listUserSearch: data.content,
      });
    }

    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
}

// Add User Project

function* AddUserProjectSaga(action) {
  try {
    const { data, status } = yield call(() =>
      cyberBugsService.assignUserProject(action.userProject)
    );

    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
}

// delete User Project

function* RemoveUserProjectSaga(action) {
  try {
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.deleteUserFromProject(action.userProject)
    );

    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
}

function* signupSaga(action) {
  console.log("action", action);
  try {
    const { data, status } = yield call(() =>
      cyberBugsService.userSignUp(action.infoUser)
    );

    if (status === 200) {
      let history = yield select((state) => state.HistoryReducer.history);
      history("/login");
    }

    notifiFuntion("success", "Sign up user successfully !");

    console.log("data", data);
  } catch (error) {
    console.log("error", error);
    notifiFuntion("error", "Sign up user fail !");
  }
}

export function* theoDoiSignUp() {
  yield takeLatest(USER_SIGNUP_SAGA, signupSaga);
}
export function* theoDoiSignin() {
  yield takeLatest(USER_SIGNIN_SAGA, signinSaga);
}

export function* theoDoiGetUser() {
  yield takeLatest(GET_ADD_USER_SAGA, getUserSaga);
}

export function* theoDoiAddUserProject() {
  yield takeLatest(ADD_USER_PROJECT_SAGA, AddUserProjectSaga);
}

export function* theoDoiRemoveUserProject() {
  yield takeLatest(REMOVE_USER_PROJECT_SAGA, RemoveUserProjectSaga);
}
