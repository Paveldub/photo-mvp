import { Dispatch } from 'react'
import { auth } from '../../firebase'
import {
  RegistrationAction,
  RegistrationActionTypes,
} from '../types/userRegistrationTypes'

export const registerStart = () => ({
  type: RegistrationActionTypes.REGISTER_START,
})

export const registerSuccess = (user: string) => ({
  type: RegistrationActionTypes.REGISTER_SUCCESS,
  payload: user,
})

export const registerFail = (error: string) => ({
  type: RegistrationActionTypes.REGISTER_FAIL,
  payload: error,
})

export const registerInitiate = (
  email: string & number,
  password: string & number,
  displayName: string & number
) => {
  return function (dispatch: Dispatch<RegistrationAction>) {
    try {
      dispatch(registerStart())

      auth.createUserWithEmailAndPassword(email, password).then(({ user }) => {
        user?.updateProfile({
          displayName,
        })

        dispatch(registerSuccess(user))
      })
    } catch (error) {
      dispatch(registerFail(error.message))
    }
  }
}
