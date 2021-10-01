import {
  RegistrationAction,
  RegistrationActionTypes,
  RegistrationState,
} from '../types/userRegistrationTypes'

const initialState: RegistrationState = {
  loading: false,
  currentUser: null,
  error: null,
}

export const userReducer = (
  state = initialState,
  action: RegistrationAction
): RegistrationState => {
  switch (action.type) {
    case RegistrationActionTypes.REGISTER_START:
      return {
        ...state,
        loading: true,
      }
    case RegistrationActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      }
    case RegistrationActionTypes.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
