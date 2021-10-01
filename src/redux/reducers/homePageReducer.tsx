import {
  homePageAction,
  homePageState,
  homePageTypes,
} from '../types/homePageTypes'

const initialState: homePageState = {
  items: [],
  isFetching: true,
}

export const homePage = (state = initialState, action: homePageAction) => {
  switch (action.type) {
    case homePageTypes.SET_HOME_PAGE:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      }
    default:
      return state
  }
}
