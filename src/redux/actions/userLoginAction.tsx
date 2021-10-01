import { auth } from '../../firebase'
import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from '../actionTypes'

export const loginStart = () => ({
  type: LOGIN_START,
})

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
})

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart())

    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => dispatch(loginSuccess(user)))
      .catch((error) => dispatch(loginFail(error.message)))
  }
}
