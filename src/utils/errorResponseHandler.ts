import {setAppError, setAppStatus} from "../redux/app-reducer";
import axios from "axios";
import { Dispatch } from "redux";

export default function errorResponseHandler(e: any, dispatch: Dispatch) {
    if (axios.isAxiosError(e) && e.response) {
        dispatch(setAppError({error: e.response.data.error}))
    } else {
        dispatch(setAppError({error: 'Some error occurred, check your connection.'}))
    }
    dispatch(setAppStatus({status: 'failed'}))
}