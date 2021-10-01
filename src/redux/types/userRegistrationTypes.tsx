export interface RegistrationState {
  loading: boolean
  currentUser: string | null
  error: string | null
}

export enum RegistrationActionTypes {
  REGISTER_START = 'REGISTER_START',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',
}

interface UserRegistrationStart {
  type: RegistrationActionTypes.REGISTER_START
}

interface UserRegistrationSuccess {
  type: RegistrationActionTypes.REGISTER_SUCCESS
  payload: string
}

interface UserRegistrationFail {
  type: RegistrationActionTypes.REGISTER_FAIL
  payload: string
}

export type RegistrationAction =
  | UserRegistrationStart
  | UserRegistrationSuccess
  | UserRegistrationFail
