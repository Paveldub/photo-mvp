import {
  FACEBOOK_SIGN_IN_FAIL,
  FACEBOOK_SIGN_IN_START,
  FACEBOOK_SIGN_IN_SUCCESS,
} from '../actionTypes'

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
}

export const facebookSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      }
    case FACEBOOK_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      }
    case FACEBOOK_SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
