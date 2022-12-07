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
import { notifiFuntion } from "../../../utils/Notification/Notification";

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
//

// Update Project
function* getUpdateProjectSaga(action) {
  console.log("projectUpdate", action.projectUpdate);
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.UpdateProject(action.projectUpdate)
    );

    if (status === 200) {
      console.log("data", data);

      notifiFuntion("success", "Update project successfully !");
    } else {
      notifiFuntion("error", "Update project fail !");
    }
    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });
  } catch (err) {
    console.log("error", err);
    notifiFuntion("error", "Update project fail !");
  }
}

// Delete Project

function* getDeleteProjectSaga(action) {
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.deleteProject(action.idProject)
    );
    if (status === 200) {
      console.log("data", data);
      notifiFuntion("success", "Delete project successfully !");
    } else {
      notifiFuntion("error", "Delete project fail !");
    }
    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });
  } catch (err) {
    console.log("error", err);
    notifiFuntion("error", "Delete project fail !");
  }
}

// Create Project

function* getCreateProjectSaga(action) {
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.createProjectAuthorize(action.newProject)
    );
    if (status === 200) {
      console.log("data", data);
      notifiFuntion("success", "Create project successfully !");
    } else {
      notifiFuntion("error", "Create project fail !");
    }
    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });
  } catch (err) {
    console.log("error", err);
    notifiFuntion("error", "Create project fail !");
  }
}

// Get Project Detail

function* getProjectDetailSaga(action) {
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.getProjectDetail(action.projectId)
    );
    if (status === 200) {
      yield put({
        type: "PUT_PROJECT_DETAIL",
        projectDetail: data.content,
      });
      console.log("data", data);
    }
  } catch (err) {
    console.log("error", err);
  }
}

// Get All Project

function* getAllProjectSaga() {
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.getAllProject()
    );
    if (status === 200) {
      yield put({
        type: "GET_ALL_PROJECT",
        arrProject: data.content,
      });
      console.log("data", data);
    }
  } catch (err) {
    console.log("error", err);
  }
}

// API create Task Project

function* postTaskSaga(action) {
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.postTaskProject(action.newTask)
    );
    if (status === 200) {
      console.log("data", data);
      notifiFuntion("success", "Create task successfully !");
    } else {
      notifiFuntion("error", "Create task fail !");
    }
  } catch (err) {
    console.log("error", err);
    notifiFuntion("error", "Create task fail !");
  }
}

// Get task Detail Saga

function* getTaskDetailSaga(action) {
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.getTaskDetail(action.taskId)
    );
    if (status === 200) {
      yield put({
        type: "GET_TASK_DETAIL",
        taskDetailModal: data.content,
      });

      console.log("data", data);
    } else {
    }
  } catch (err) {
    console.log("error", err);
  }
}

// Put Status Task..

function* putStatusTaskSaga(action) {
  const { taskStatusId } = action;
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.updateStatusTask(taskStatusId)
    );
    if (status === 200) {
      yield put({
        type: "GET_PROJECT_DETAIL_SAGA",
        projectId: taskStatusId.projectId,
      });
      yield put({
        type: "GET_TASK_DETAIL_SAGA",
        taskId: taskStatusId.taskId,
      });

      console.log("data", data);
    }
  } catch (err) {
    console.log("error", err);
  }
}

// Post Update Task Project

function* updateTaskProject(action) {
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() =>
      projectCyberBugsSevice.updateTaskProject(action.newTask)
    );
    if (status === 200) {
      console.log("data", data);
    }
    yield put({
      type: "GET_PROJECT_DETAIL_SAGA",
      projectId: data.content.projectId,
    });
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

export function* theoDoiGetProjectDeleteSaga() {
  yield takeLatest("GET_DELETE_PROJECT_SAGA", getDeleteProjectSaga);
}

export function* theoDoiCreateProjectSaga() {
  yield takeLatest("GET_CREATE_PROJECT_SAGA", getCreateProjectSaga);
}

export function* theoDoiProjectDetailSaga() {
  yield takeLatest("GET_PROJECT_DETAIL_SAGA", getProjectDetailSaga);
}
export function* theoDoiGetAllProjectSaga() {
  yield takeLatest("GET_ALL_PROJECT_SAGA", getAllProjectSaga);
}
export function* theoDoiPostTaskSaga() {
  yield takeLatest("POST_TASK_PROJECT_SAGA", postTaskSaga);
}

export function* theoDoiGetTaskDetail() {
  yield takeLatest("GET_TASK_DETAIL_SAGA", getTaskDetailSaga);
}
export function* theoDoiPutStatusTask() {
  yield takeLatest("PUT_STATUS_TASK_SAGA", putStatusTaskSaga);
}
export function* theoDoiUpdateTask() {
  yield takeLatest("POST_UPDATE_TASK", updateTaskProject);
}
