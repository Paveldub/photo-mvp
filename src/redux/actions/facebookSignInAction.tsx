import { auth, facebookAuthProvider } from '../../firebase'
import {
  FACEBOOK_SIGN_IN_FAIL,
  FACEBOOK_SIGN_IN_START,
  FACEBOOK_SIGN_IN_SUCCESS,
} from '../actionTypes'

export const facebookSignInStart = () => ({
  type: FACEBOOK_SIGN_IN_START,
})

export const facebookSignInSuccess = (user) => ({
  type: FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
})

export const facebookSignInFail = (error) => ({
  type: FACEBOOK_SIGN_IN_FAIL,
  payload: error,
})

export const facebookSignInitiate = () => {
  return function (dispatch) {
    dispatch(facebookSignInStart())

    auth
      .signInWithPopup(facebookAuthProvider.addScope('user_birthday, email'))
      .then(({ user }) => dispatch(facebookSignInSuccess(user)))
      .catch((error) => dispatch(facebookSignInFail(error.message)))
  }
}
