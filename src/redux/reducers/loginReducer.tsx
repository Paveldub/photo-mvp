import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from '../actionTypes'

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
