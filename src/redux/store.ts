import { createStore, combineReducers, applyMiddleware } from 'redux'
import { profileReducer } from "./profile-reducer";
import thunkMiddleWare from 'redux-thunk'
import {passwordRecoveryReducer} from "./passwordRecovery-reducer";
import {appReducer} from "./app-reducer";
import { loginReducer } from "../pages/Login/loginReducer";
import {signUpReducer} from "../pages/signUp/signUp-reducer";
import {cardPacksReducer} from "./cardPacksReducer";


let rootReducers = combineReducers({
    profile: profileReducer,
    auth: loginReducer,
    signUp: signUpReducer,
    passwordRecovery: passwordRecoveryReducer,
    app: appReducer,
    cardPacks: cardPacksReducer,
})


export type AppStateType = ReturnType<typeof rootReducers>
export type storeType = typeof store
const store = createStore( rootReducers, applyMiddleware(thunkMiddleWare))

export default store

// @ts-ignore
window.store = store;

