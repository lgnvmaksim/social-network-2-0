import { Dispatch } from 'redux'
import axios, {AxiosError} from "axios";
import {ResponseType} from "../api/commonTypes/commonTypes";
import {setAppError, setAppStatus} from "../reducers/initializationReducer";


export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: Dispatch) => {
    if (data.messages.length) {
        dispatch(setAppError( {error: data.messages[0]}))
    } else {
        dispatch(setAppError({error:'Some error occurred'}))
    }
    dispatch(setAppStatus({status: 'failed'}))
}

export const handleServerNetworkError = (e: unknown, dispatch: Dispatch) => {
    const err = e as Error | AxiosError<{ error: string }>
    if (axios.isAxiosError(err)) {
        const error = err.message ? err.message : 'Some error occurred'
        dispatch(setAppError({error}))
    } else {
        dispatch(setAppError({ error:`Native error ${err.message}`}))
    }
    dispatch(setAppStatus({status: 'failed'}))
}