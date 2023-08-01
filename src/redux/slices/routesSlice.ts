import { createSlice } from '@reduxjs/toolkit'
import { routes } from '../../mocks/routes'
import { type RoutesProps } from '../../types'

const initialState = routes

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setSelectedRoute (state: RoutesProps[], actions) {
      state.map(route =>
        route.key === actions.payload
          ? route.isSelected = true
          : route.isSelected = false
      )
    }
  }
})

export const { setSelectedRoute } = routesSlice.actions
export const routesReducer = routesSlice.reducer
