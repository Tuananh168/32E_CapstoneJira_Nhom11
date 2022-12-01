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
import { projectCategoryService } from "../../../services/ProjectCategoryService";
import { PROJECT_CATEGORY_SAGA } from "../../constants/CyberBugs/CyberBugs";

function* projectCategorySaga() {
  try {
    const { data, status } = yield call(() =>
      projectCategoryService.ProjectCategory()
    );
    if (status === 200) {
      yield put({
        type: "GET_PROJECT_CATEGORY",
        listProjectCategory: data.content,
      });
    }
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
}

export function* theoDoiProjectCategory() {
  yield takeLatest(PROJECT_CATEGORY_SAGA, projectCategorySaga);
}
