import { all } from "redux-saga/effects";
import * as UserCyberbugSaga from "./Cyberbugs/UserCyberbugsSaga";
import * as ProjectSaga from "./Cyberbugs/ProjectSaga";
import * as ProjectCategorySaga from "./Cyberbugs/ProjectCategorySaga";
import * as TaskTypeSaga from "./Cyberbugs/TaskTypeSaga";
import * as PrioritySaga from "./Cyberbugs/PrioritySaga";
import * as StatusSaga from "./Cyberbugs/StatusSaga";

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
    ProjectSaga.theoDoiCreateProjectSaga(),
    ProjectSaga.theoDoiProjectDetailSaga(),
    ProjectSaga.theoDoiGetAllProjectSaga(),
    ProjectSaga.theoDoiPostTaskSaga(),
    ProjectSaga.theoDoiGetTaskDetail(),
    ProjectSaga.theoDoiPutStatusTask(),
    TaskTypeSaga.theoDoiTaskTypeSaga(),
    PrioritySaga.theoDoiPrioritySaga(),
    StatusSaga.theoDoiStatusSaga(),
  ]);
}
