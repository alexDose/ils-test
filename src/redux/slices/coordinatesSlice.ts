import { createSlice } from '@reduxjs/toolkit'
import {CoordinatesProps} from "../../types";

const initialState: CoordinatesProps = {
    coordinates: [],
}

const coordinatesSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducers: {
        setСoordinates(state: CoordinatesProps, action) {
            state.coordinates = action.payload
        },
    },
})

export const { setСoordinates } = coordinatesSlice.actions
export const coordinatesReducer = coordinatesSlice.reducer
