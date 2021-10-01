import {
  setUserAction,
  setUserState,
  setUserTypes,
} from '../types/setUserTypes'

const initialState: setUserState = {
  loading: false,
  currentUser: null,
  error: null,
}

// if user signed in after reload page user signed in
export const setReducer = (state = initialState, action: setUserAction) => {
  switch (action.type) {
    case setUserTypes.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      }
    default:
      return state
  }
}
