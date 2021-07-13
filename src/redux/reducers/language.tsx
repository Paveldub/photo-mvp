import { SET_LANGUAGE } from '../actionTypes'

const initialState = ''

export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_LANGUAGE: {
      return action.payload
    }
    default:
      return state
  }
}
