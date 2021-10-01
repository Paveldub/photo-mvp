import { PhotoDetails } from '../Components/Common/Photos'
import {
  ABOUT_PATH,
  CONTACTS_PATH,
  GALLERY_PATH,
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  WELCOME_PATH,
} from '../Constants/paths'
import {
  About,
  ContactUs,
  Gallery,
  Home,
  Login,
  Register,
  WelcomePage,
} from '../Pages'

const galleryRoute = {
  path: GALLERY_PATH,
  component: Gallery,
}

const WeclomeRoute = {
  path: WELCOME_PATH,
  component: WelcomePage,
}

const aboutRoute = {
  path: ABOUT_PATH,
  component: About,
}

const contactRoute = {
  path: CONTACTS_PATH,
  component: ContactUs,
}

const homeRoute = {
  path: HOME_PATH,
  component: Home,
}

const registerRoute = {
  path: REGISTER_PATH,
  component: Register,
}

const loginRoute = {
  path: LOGIN_PATH,
  component: Login,
}

// const pageNotFound = {
//   component: PageNotFound,
//   path: '*',
// }

const photoId = {
  component: PhotoDetails,
  path: '/photos/:photosId/:photoName',
}

export const routes = [
  galleryRoute,
  aboutRoute,
  contactRoute,
  homeRoute,
  // pageNotFound,
  photoId,
  registerRoute,
  loginRoute,
  WeclomeRoute,
]
