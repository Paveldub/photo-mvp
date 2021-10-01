import {
  logoutAction,
  logoutStateTypes,
  logoutTypes,
} from '../types/logoutTypes'

const initialState: logoutStateTypes = {
  loading: false,
  currentUser: null,
  error: null,
}

export const logoutReducer = (state = initialState, action: logoutAction) => {
  switch (action.type) {
    case logoutTypes.LOGOUT_START:
      return {
        ...state,
        loading: true,
      }
    case logoutTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: null,
      }
    case logoutTypes.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
