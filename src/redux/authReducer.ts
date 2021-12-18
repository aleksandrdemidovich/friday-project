import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {authAPI} from "../api/authAPI";
import {Dispatch} from "redux";

export enum AuthEvents {
    SET_USER_DATA = 'SET_USER_DATA',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
    LOGOUT = 'LOGOUT',
    SET_STATUS_REGISTRATION = "SET_STATUS_REGISTRATION",
}
//types

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type AuthStateType = {
    user: IUser | null
    isLoggedIn: boolean
    error: string | null
    loading: boolean,
    status: RequestStatusType
}

export const initialState: AuthStateType = {
    user: null,
    isLoggedIn: false,
    error: null,
    loading: false,
    status: 'idle',
}

export type  IUser = {
    _id: string
    avatar: string
    email: string
    name: string
    token:string
    tokenDeathTime:number
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
}

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type AuthActionsType = InferActionsType<typeof authActions>

// reducer
export const authReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case AuthEvents.SET_USER_DATA:
            return {...state, user: action.payload, isLoggedIn: true, loading: false}
        case AuthEvents.SET_LOADING:
            return {...state, loading: action.payload}
        case AuthEvents.SET_ERROR:
            return {...state, error: action.error, loading: false}
        case AuthEvents.LOGOUT:
            return {...state, isLoggedIn: false, loading: false, error: '', user: null}
        case AuthEvents.SET_STATUS_REGISTRATION: {
            return {...state, status: action.status, loading: false}
        }
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
    setLoading: (payload: boolean) => {
        return {
            type: AuthEvents.SET_LOADING,
            payload
        } as const
    },
    setError: (error: string) => {
        return {
            type: AuthEvents.SET_ERROR,
            error
        } as const
    },
    logout: () => {
    return {
        type: AuthEvents.LOGOUT
    } as const
    },
    setStatusRegistration:(status: RequestStatusType) => {
        return {
            type: AuthEvents.SET_STATUS_REGISTRATION,
            status
        } as const
    }
}

// thunks
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, {}, AuthActionsType> => async (dispatch) => {
    dispatch(authActions.setLoading(true))
    try {
        const data = await authAPI.login(email, password, rememberMe);
        dispatch(authActions.setUserData(data))
        dispatch(authActions.setLoading(false))
    } catch (e:any) {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        dispatch(authActions.setError(error))
    }
    finally {

    }
}


export const initializingTC = (): ThunkAction<void, AppStateType, {}, AuthActionsType> => async (dispatch) => {
    dispatch(authActions.setLoading(true))
    try {
        const data = await authAPI.me()
        dispatch(authActions.setUserData(data))
    } catch (e:any) {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        dispatch(authActions.setError(error))
    } finally {
    }
}

export const logoutTC = (): ThunkAction<void, AppStateType, {}, any> => async (dispatch) => {
    dispatch(authActions.setLoading(true))
    try {
        const response = await authAPI.logout()
        dispatch(authActions.logout())
        return response
    } catch (e) {

    }

}

export const setNewUserTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(authActions.setStatusRegistration('loading'))
    authAPI.signUp(email, password)
        .then((res) => {
            console.log(res.data)
            dispatch(authActions.setStatusRegistration('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
            // dispatch(setErrorRegistrationAC(error))
            dispatch(authActions.setError(error))
            dispatch(authActions.setStatusRegistration('failed'))
        })
}

