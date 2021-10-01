import { auth, googleAuthProvider } from '../../firebase'
import {
  GOOGLE_SIGN_IN_FAIL,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
} from '../actionTypes'

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
})

export const googleSignInSuccess = (user) => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
})

export const googleSignInFail = (error) => ({
  type: GOOGLE_SIGN_IN_FAIL,
  payload: error,
})

export const googleSignInitiate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart())

    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => dispatch(googleSignInSuccess(user)))
      .catch((error) => dispatch(googleSignInFail(error.message)))
  }
}
