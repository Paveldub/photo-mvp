export interface logoutStateTypes {
  loading: boolean
  currentUser: null | string
  error: null | string
}

export enum logoutTypes {
  LOGOUT_START = 'LOGOUT_START',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAIL = 'LOGOUT_FAIL',
}

interface logoutStart {
  type: logoutTypes.LOGOUT_START
}

interface logoutSuccess {
  type: logoutTypes.LOGOUT_SUCCESS
  payload: string
}

interface logoutFail {
  type: logoutTypes.LOGOUT_FAIL
  payload: string
}

export type logoutAction = logoutStart | logoutSuccess | logoutFail
