import { SET_GALLERY_PAGE } from '../actionTypes'

const initialState = {
  items: [],
  isFetching: true,
}

export const galleryPage = (state = initialState, action) => {
  switch (action.type) {
    case SET_GALLERY_PAGE:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      }
    default:
      return state
  }
}
