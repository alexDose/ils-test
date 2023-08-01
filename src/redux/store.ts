import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {routesReducer} from "./slices/routesSlice";
import rootSaga from "./sagas/root-sagas";
import {coordinatesReducer} from "./slices/coordinatesSlice";
import {appReducer} from "./slices/appSlice";

const rootReducer = combineReducers({
    app: appReducer,
    routes: routesReducer,
    coordinates: coordinatesReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
