import { setUserTypes } from '../types/setUserTypes'

export const setUser = (user: string) => ({
  type: setUserTypes.SET_USER,
  payload: user,
})
