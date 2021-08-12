import {
  ABOUT_PATH,
  CONTACTS_PATH,
  GALLERY_PATH,
  HOME_PATH,
} from '../Constants/paths'
import { About, ContactUs, Gallery, Home } from '../Pages'

const galleryRoute = {
  path: GALLERY_PATH,
  component: About,
}

const aboutRoute = {
  path: ABOUT_PATH,
  component: Gallery,
}

const contactRoute = {
  path: CONTACTS_PATH,
  component: ContactUs,
}

const homeRoute = {
  path: HOME_PATH,
  component: Home,
}

export const routes = [galleryRoute, aboutRoute, contactRoute, homeRoute]
