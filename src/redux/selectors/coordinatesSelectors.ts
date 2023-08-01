import { type RootState } from '../store'

export const getCoordinates = (state: RootState): Array<[number, number]> => (
  state.coordinates.coordinates
)
