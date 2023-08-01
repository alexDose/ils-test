import {createAction} from '@reduxjs/toolkit'

export const getCoordinatesAction = createAction('coordinates/getCoordinates', params => ({payload: {params}}))

export type GetCoordinatesType = ReturnType<typeof getCoordinatesAction>
