import { call, put, takeLatest } from "redux-saga/effects";
import { taskTypeService } from "../../../services/TaskTypeService";
import { TASK_TYPE_SAGA } from "../../constants/CyberBugs/Tasktype";
import { GET_ALL_TASK_TYPE } from "../../constants/ConstantReducer/TaskTypeConstantReducer";

function* getTaskType() {
  console.log("123");
  try {
    const { data, status } = yield call(() =>
      taskTypeService.taskTypeProject()
    );
    if (status === 200) {
      yield put({
        type: GET_ALL_TASK_TYPE,
        arrTaskType: data.content,
      });
    }

    console.log("data", data);
  } catch (err) {
    console.log("error", err);
  }
}

export function* theoDoiTaskTypeSaga() {
  yield takeLatest(TASK_TYPE_SAGA, getTaskType);
}
