import {createSlice} from '@reduxjs/toolkit'
import {AppProps} from "../../types";

const initialState: AppProps = {
    loading: false,
    error: null
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLoading(state: AppProps, action) {
            state.loading = action.payload
        },
        setError(state: AppProps, action) {
            state.error = action.payload
        },
    },
})

export const { setIsLoading, setError } = appSlice.actions
export const appReducer = appSlice.reducer
