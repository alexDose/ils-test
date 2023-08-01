import { createSelector } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { type RoutesProps } from '../../types'

export const getRoutes = (state: RootState): RoutesProps[] => (
  state.routes
)
export const getRoute = createSelector([getRoutes], route => (
  route.filter(route => route.isSelected)
))
