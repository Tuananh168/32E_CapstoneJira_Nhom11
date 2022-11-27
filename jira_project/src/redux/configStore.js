import { combineReducers, createStore, applyMiddleware } from "redux"
import { HistoryReducer } from "./reducers/HistoryReducers"
import { UserCyberBugsReducer } from "./reducers/UserCyberBugsReducers"


// middleware saga
import createMiddleWareSaga from "redux-saga"
import { rootSaga } from "./sagas/rootSaga"


const middleWareSaga = createMiddleWareSaga()


const rootReducer = combineReducers({
    HistoryReducer,
    UserCyberBugsReducer,
})


const store = createStore(rootReducer, applyMiddleware(middleWareSaga))
middleWareSaga.run(rootSaga)

export default store;