import {getCoordinatesAction, GetCoordinatesType} from "../actions/getCoordinatesAction";
import {osrmService} from "../../HTTP-services";
import {call, put, takeEvery} from 'redux-saga/effects'
import {setСoordinates} from "../slices/coordinatesSlice";
import {setError, setIsLoading} from "../slices/appSlice";

export function* watchGetCoordinates() {
    yield takeEvery(getCoordinatesAction.type, getСoordinates)
}

export function* getСoordinates(actions: GetCoordinatesType): any {
    try {
        yield put(setIsLoading(true))
        const res = yield call(osrmService.getRoutes, actions.payload.params)
        yield put(setСoordinates(res.data.routes[0].geometry.coordinates))
    } catch (error: any) {
        yield put(setError(error.response.data.message))
    } finally {
        yield put(setIsLoading(false))
    }
}
