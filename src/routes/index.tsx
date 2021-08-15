import { PageNotFound } from '../Components/Common/PageNotFound'
import {
  ABOUT_PATH,
  CONTACTS_PATH,
  GALLERY_PATH,
  HOME_PATH,
} from '../Constants/paths'
import { About, ContactUs, Gallery, Home } from '../Pages'

const galleryRoute = {
  path: GALLERY_PATH,
  component: Gallery,
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

const pageNotFound = {
  component: PageNotFound,
}

export const routes = [
  galleryRoute,
  aboutRoute,
  contactRoute,
  homeRoute,
  pageNotFound,
]
