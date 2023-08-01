import { type RootState } from '../store'

export const getIsLoading = (state: RootState): boolean => (
  state.app.loading
)
export const getError = (state: RootState): string | null => (
  state.app.error
)
