import { call, put, takeLatest } from "redux-saga/effects";
import { priorityService } from "../../../services/PriorityService";
import { GET_PRIORITY_SAGA } from "../../constants/CyberBugs/PriorityConstant";
import { PRIORITY_PROJECT } from "../../constants/ConstantReducer/PriorityConstantReducer";
function* getPriorityType() {
  try {
    const { data, status } = yield call(() =>
      priorityService.priorityProject()
    );
    if (status === 200) {
      yield put({
        type: PRIORITY_PROJECT,
        arrPriority: data.content,
      });
    }

    console.log("data", data);
  } catch (err) {
    console.log("error", err);
  }
}

export function* theoDoiPrioritySaga() {
  yield takeLatest(GET_PRIORITY_SAGA, getPriorityType);
}
