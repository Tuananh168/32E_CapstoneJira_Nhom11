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
import { projectCyberBugsSevice } from "../../../services/ProjectCyberBugsService";

// function* createProjectSaga(action) {
//   try {
//     // Gọi API lấy từ dữ liệu về
//   } catch (err) {
//     console.log("error", err);
//   }
// }

function* getListProjectSaga(action) {
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.ProjectCyberBugs()
    );
    if (status === 200) {
      yield put({
        type: "GET_LIST_PROJECT",
        projectList: data.content,
      });
    }
    console.log("data", data);
  } catch (err) {
    console.log("error", err);
  }
}

function* getUpdateProjectSaga(action) {
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.ProjectCyberBugs(action.projectUpdate)
    );
    if (status === 200) {
      console.log("data", data);
    }
  } catch (err) {
    console.log("error", err);
  }
}

export function* theoDoiGetListProjectSaga() {
  yield takeLatest("GET_LIST_PROJECT_SAGA", getListProjectSaga);
}

export function* theoDoiGetProjectUpdateSaga() {
  yield takeLatest("GET_UPDATE_PROJECT_SAGA", getUpdateProjectSaga);
}
