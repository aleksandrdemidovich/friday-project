import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {authAPI} from "../api/authAPI";
import {Dispatch} from "redux";
import {AppActionsType, setAppError, setAppStatus} from "./app-reducer";
import errorResponseHandler from "../utils/errorResponseHandler";

export enum AuthEvents {
    SET_USER_DATA = 'SET_USER_DATA',
    LOGOUT = 'LOGOUT',
    SET_EMAIL = 'SET_EMAIL',
}

//types

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type AuthStateType = {
    user: IUser | null
    isLoggedIn: boolean
    email: string
}

export const initialState: AuthStateType = {
    user: null,
    isLoggedIn: false,
    email: ''
}

export type  IUser = {
    _id: string
    avatar: string
    email: string
    name: string
    token: string
    tokenDeathTime: number
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
}

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type AuthActionsType = InferActionsType<typeof authActions>

export type AuthAppActionsType = AuthActionsType | AppActionsType

// reducer
export const authReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case AuthEvents.SET_USER_DATA:
            return {...state, user: action.payload, isLoggedIn: true}
        case AuthEvents.LOGOUT:
            return {...state, isLoggedIn: false, user: null}
        case AuthEvents.SET_EMAIL:
            return {...state, email: action.email};
        default :
            return state
    }
}

// actions creators
export const authActions = {
    setUserData: (payload: IUser) => {
        return {
            type: AuthEvents.SET_USER_DATA,
            payload
        } as const
    },
    logout: () => {
        return {
            type: AuthEvents.LOGOUT
        } as const
    },
    setEmail: (email: string) => {
        return {
            type: AuthEvents.SET_EMAIL,
            email
        } as const
    }
}

// thunks
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, {}, AuthAppActionsType> => async (dispatch) => {
    dispatch(setAppError({error: ''}))
    dispatch(setAppStatus({status: 'loading'}));
    try {
        const data = await authAPI.login(email, password, rememberMe);
        dispatch(authActions.setUserData(data))
        dispatch(setAppStatus({status:'idle'}))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        dispatch(setAppError({error}))
        dispatch(setAppStatus({status:'failed'}))
    } finally {

    }
}


export const initializingTC = (): ThunkAction<void, AppStateType, {}, AuthAppActionsType> => async (dispatch) => {
    dispatch(setAppError({error: ''}))
    dispatch(setAppStatus({status: 'loading'}));
    try {
        const data = await authAPI.me()
        dispatch(authActions.setUserData(data))
        dispatch(setAppStatus({status:'idle'}))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        dispatch(setAppError({error}))
        dispatch(setAppStatus({status:'failed'}))
    } finally {
    }
}

export const logoutTC = (): ThunkAction<void, AppStateType, {}, AuthAppActionsType> => async (dispatch) => {
    dispatch(setAppError({error: ''}))
    dispatch(setAppStatus({status: 'loading'}));
    debugger
    try {
        const response = await authAPI.logout()
        dispatch(authActions.logout())
        dispatch(setAppStatus({status:'idle'}))
        return response
    } catch (e:any) {
        // const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        // dispatch(setAppError({error}))
        // dispatch(setAppStatus({status:'failed'}))
    }

}

export const setNewUserTC = (email: string, password: string):ThunkAction<void, AppStateType, {}, AuthAppActionsType> => (dispatch) => {
    dispatch(setAppStatus({status:'loading'}))
    authAPI.signUp(email, password)
        .then((res) => {
            console.log(res.data)
            dispatch(setAppStatus({status:'succeeded'}))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
            dispatch(setAppError({error}))
            dispatch(setAppStatus({status:'failed'}))
        })
}

export const passwordRecovery = (email: string, message: string):ThunkAction<void, AppStateType, {}, AuthAppActionsType> => async (dispatch) => {
    try {
        dispatch(setAppError({error: ''}))
        dispatch(setAppStatus({status: 'loading'}));
        await authAPI.passRecovery(email, message);
        dispatch(setAppStatus({status: 'succeeded'}));
        dispatch((authActions.setEmail(email)))
    } catch (e: any) {
        errorResponseHandler(e, dispatch)
    }
}


export const inputNewPassword = (password: string, resetPasswordToken: string | undefined):ThunkAction<void, AppStateType, {}, AuthAppActionsType> => async (dispatch) => {
    try {
        dispatch(setAppError({error: ''}))
        dispatch(setAppStatus({status: 'loading'}));
        await authAPI.inputNewPass(password, resetPasswordToken);
        dispatch(setAppStatus({status: 'succeeded'}));
    } catch (e) {
        errorResponseHandler(e, dispatch)
    }
}
