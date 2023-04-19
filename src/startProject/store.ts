import {combineReducers} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";


let rootReducer = combineReducers({

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})


export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector : TypedUseSelectorHook<AppRootStateType> = useSelector

type CommonActionType = any

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, CommonActionType>
