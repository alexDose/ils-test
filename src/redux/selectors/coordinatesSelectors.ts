import {RootState} from "../store";

export const getCoordinates = (state: RootState): [number, number][] => (
    state.coordinates.coordinates
)
