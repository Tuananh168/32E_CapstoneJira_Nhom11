import { combineReducers, createStore, applyMiddleware } from "redux"
import { HistoryReducer } from "./reducers/HistoryReducers"
import { UserCyberBugsReducer } from "./reducers/UserCyberBugsReducers"
import { ProjectCyberBugsReducer } from "./reducers/ProjectCyberBugsReducer"
import { DrawerReducer } from "./reducers/DrawerCyberbugsReducer"
import { ProjectReducer } from "./reducers/ProjectReducer"
import { ProjectCategoryReducer } from "./reducers/ProjectCategoryReducer"

// middleware saga
import createMiddleWareSaga from "redux-saga"
import { rootSaga } from "./sagas/rootSaga"


const middleWareSaga = createMiddleWareSaga()


const rootReducer = combineReducers({
    HistoryReducer,
    UserCyberBugsReducer,
    ProjectCyberBugsReducer,
    DrawerReducer,
    ProjectReducer,
    ProjectCategoryReducer,
})


const store = createStore(rootReducer, applyMiddleware(middleWareSaga))
middleWareSaga.run(rootSaga)

export default store;