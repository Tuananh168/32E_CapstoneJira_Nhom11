import { call, put, takeLatest } from "redux-saga/effects";
import { statusService } from "../../../services/StatusService";
import { GET_STATUS_SAGA } from "../../constants/CyberBugs/StatusConstant";
import {GET_ALL_STATUS} from "../../constants/ConstantReducer/StatusConstantReducer"
function* getStatusSaga(action) {
  try {
    // Gọi API lấy từ dữ liệu về
    const { data, status } = yield call(() => statusService.statusProject());
    if (status === 200) {
      yield put({
        type: GET_ALL_STATUS,
        arrStatus: data.content,
      });
      console.log("data", data);
    }
  } catch (err) {
    console.log("error", err);
  }
}

export function* theoDoiStatusSaga() {
  yield takeLatest(GET_STATUS_SAGA, getStatusSaga);
}
