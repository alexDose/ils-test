import {all} from "redux-saga/effects";
import {watchGetCoordinates} from "./watchGetCoordinates";

const rootSaga = function* () {
    yield all([
        watchGetCoordinates()
    ]);
};

export default rootSaga;
