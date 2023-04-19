import {combineReducers} from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {initializationReducer} from "../reducers/initializationReducer";
import {authReducer} from "../reducers/authReducer";


let rootReducer = combineReducers({
    initialization: initializationReducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})


export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector : TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()

type CommonActionType = any

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, CommonActionType>
