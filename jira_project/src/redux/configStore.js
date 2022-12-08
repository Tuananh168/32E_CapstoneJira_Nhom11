import { combineReducers, createStore, applyMiddleware } from "redux"
import { HistoryReducer } from "./reducers/HistoryReducers"
import { UserCyberBugsReducer } from "./reducers/UserCyberBugsReducers"
import { ProjectCyberBugsReducer } from "./reducers/ProjectCyberBugsReducer"
import { DrawerReducer } from "./reducers/DrawerCyberbugsReducer"
import { ProjectReducer } from "./reducers/ProjectReducer"
import { ProjectCategoryReducer } from "./reducers/ProjectCategoryReducer"
import { TaskTypeReducer } from "./reducers/TaskTypeReducer"

// middleware saga
import createMiddleWareSaga from "redux-saga"
import { rootSaga } from "./sagas/rootSaga"
import { PriorityReducer } from "./reducers/PriorityReducer"
import { TaskDetailReducer } from "./reducers/TaskDetailReducer"
import { StatusReducer } from "./reducers/StatusReducer"
import { CommentReducer } from "./reducers/CommentReducer"


const middleWareSaga = createMiddleWareSaga()


const rootReducer = combineReducers({
    HistoryReducer,
    UserCyberBugsReducer,
    ProjectCyberBugsReducer,
    DrawerReducer,
    ProjectReducer,
    ProjectCategoryReducer,
    TaskTypeReducer,
    PriorityReducer,
    TaskDetailReducer,
    StatusReducer,
    CommentReducer,
})


const store = createStore(rootReducer, applyMiddleware(middleWareSaga))
middleWareSaga.run(rootSaga)

export default store;