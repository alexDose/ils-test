import { createSelector } from '@reduxjs/toolkit'
import {RootState} from "../store";
import {RoutesProps} from "../../types";

export const getRoutes = (state: RootState): RoutesProps[] => (
    state.routes
)
export const getRoute = createSelector([getRoutes], route => (
    route.filter(route => route.isSelected)
))
