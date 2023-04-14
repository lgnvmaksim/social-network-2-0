import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";


let reducers = combineReducers({

})

export const store = legacy_createStore(
    reducers, applyMiddleware(thunkMiddleware)
);


export type AppRootStateType = ReturnType<typeof reducers>

export const useAppSelector : TypedUseSelectorHook<AppRootStateType> = useSelector

type CommonActionType = any

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, CommonActionType>