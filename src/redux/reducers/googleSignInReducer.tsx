import {
  GOOGLE_SIGN_IN_FAIL,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
} from '../actionTypes'

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
}

export const googleSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      }
    case GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      }
    case GOOGLE_SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
