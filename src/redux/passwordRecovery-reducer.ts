import {Dispatch} from 'redux';
import {setAppError, setAppStatus} from "./app-reducer";
import errorResponseHandler from "../utils/errorResponseHandler";
import {authAPI} from "../api/authAPI";


export type RecoveryStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type InitialStateType = {
    email: string
}

const initialState: InitialStateType = {
    email: '',
}

export type PasswordRecoveryActionsType = setEmailActionType


export const passwordRecoveryReducer = (state = initialState, action: PasswordRecoveryActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_EMAIL': {
            return {...state, ...action.payload};
        }
        default: {
            return state;
        }
    }
}

type setEmailActionType = ReturnType<typeof setEmail>
export const setEmail = (email: string) => ({
    type: 'SET_EMAIL',
    payload: {email}
} as const);

export const passwordRecovery = (email: string, message: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppError({error: ''}))
        dispatch(setAppStatus({status: 'loading'}));
        await authAPI.passRecovery(email, message);
        dispatch(setAppStatus({status: 'succeeded'}));
        dispatch((setEmail(email)))
    } catch (e: any) {
        errorResponseHandler(e, dispatch)
    }
}

export const inputNewPassword = (password: string, resetPasswordToken: string | undefined) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppError({error: ''}))
        dispatch(setAppStatus({status: 'loading'}));
        await authAPI.inputNewPass(password, resetPasswordToken);
        dispatch(setAppStatus({status: 'succeeded'}));
    } catch (e) {
        errorResponseHandler(e, dispatch)
    }
}

