import { all } from "redux-saga/effects";
import * as UserCyberbugSaga from "./Cyberbugs/UserCyberbugsSaga";
import * as ProjectSaga from "./Cyberbugs/ProjectSaga";
import * as ProjectCategorySaga from "./Cyberbugs/ProjectCategorySaga";

export function* rootSaga() {
  yield all([
    UserCyberbugSaga.theoDoiSignin(),
    UserCyberbugSaga.theoDoiGetUser(),
    UserCyberbugSaga.theoDoiAddUserProject(),
    UserCyberbugSaga.theoDoiRemoveUserProject(),
    ProjectSaga.theoDoiGetListProjectSaga(),
    ProjectCategorySaga.theoDoiProjectCategory(),
    ProjectSaga.theoDoiGetProjectUpdateSaga(),
    ProjectSaga.theoDoiGetProjectDeleteSaga(),
  ]);
}
