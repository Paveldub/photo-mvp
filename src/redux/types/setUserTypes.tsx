export interface setUserState {
  loading: boolean
  currentUser: null | string
  error: null | string
}

export enum setUserTypes {
  SET_USER = 'SET_USER',
}

interface setUserStart {
  type: setUserTypes.SET_USER
  payload: string
}

export type setUserAction = setUserStart
