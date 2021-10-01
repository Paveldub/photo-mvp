import { combineReducers } from 'redux'
import { galleryPage } from './galleryPageReducer'
import { homePage } from './homePageReducer'
import language from './language'
import { userReducer } from './userReducer'

export default combineReducers({
  language,
  user: userReducer,
  homeGallery: homePage,
  galleyPage: galleryPage,
})
