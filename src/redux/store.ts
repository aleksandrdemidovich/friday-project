import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import {appReducer} from "./app-reducer";
import {authReducer} from "./authReducer";


let rootReducers = combineReducers({
    auth: authReducer,
    app: appReducer
})


export type AppStateType = ReturnType<typeof rootReducers>
export type storeType = typeof store
const store = createStore( rootReducers, applyMiddleware(thunkMiddleWare))

export default store

// @ts-ignore
window.store = store;

