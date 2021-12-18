import {Dispatch} from "redux";
import {RegistrationAPI} from "./signUp-api";
import {authAPI} from "../../api/authAPI";


const SET_ERROR_REGISTRATION = "SET_ERROR_REGISTRATION"
const SET_STATUS_REGISTRATION = "SET_STATUS_REGISTRATION"

const initialState: initialStateType = {
    status: 'idle',
    error: null
}

type initialStateType = {
    status: RequestStatusType
    error: string | null
}

export const signUpReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_ERROR_REGISTRATION": {
            return {...state, error: action.error}
        }
        case "SET_STATUS_REGISTRATION": {
            return {...state, status: action.status}
        }

        default :
            return state
    }

}

//action

export const setErrorRegistrationAC = (error: string) => {
    return {
        type: SET_ERROR_REGISTRATION,
        error
    } as const
}
export const setStatusRegistrationAC = (status: RequestStatusType) => {
    return {
        type: SET_STATUS_REGISTRATION,
        status
    } as const
}

//thunk
export const setNewUserTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(setStatusRegistrationAC('loading'))
    authAPI.signUp(email, password)
        .then((res) => {
            console.log(res.data)
            dispatch(setStatusRegistrationAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
            dispatch(setErrorRegistrationAC(error))
            dispatch(setStatusRegistrationAC('failed'))
        })
}


//types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type ActionsType = | ReturnType<typeof setErrorRegistrationAC> | ReturnType<typeof setStatusRegistrationAC>


