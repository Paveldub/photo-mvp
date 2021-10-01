import { Dispatch } from 'react'
import { auth } from '../../firebase'
import { logoutAction, logoutTypes } from '../types/logoutTypes'

export const logoutStart = () => ({
  type: logoutTypes.LOGOUT_START,
})

export const logoutSuccess = () => ({
  type: logoutTypes.LOGOUT_SUCCESS,
})

export const logoutFail = (error: string) => ({
  type: logoutTypes.LOGOUT_FAIL,
  payload: error,
})

export const logoutInitiate = () => {
  return function (dispatch: Dispatch<logoutAction>) {
    try {
      dispatch(logoutStart())

      auth.signOut().then((resp) => dispatch(logoutSuccess(resp)))
    } catch (error) {
      dispatch(logoutFail(error.message))
    }
  }
}
