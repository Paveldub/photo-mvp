import { Dispatch } from 'react'
import db from '../../firebase'
import { homePageAction, homePageTypes } from '../types/homePageTypes'

export const setHomeGalleryPhotos = (photos) => ({
  type: homePageTypes.SET_HOME_PAGE,
  payload: photos,
})

export const setHomeGallery = () => {
  return function (dispatch: Dispatch<homePageAction>) {
    try {
      const fetchUsers = async () => {
        const homeGalleryCollection = await db.collection('homeGallery').get()

        dispatch(
          setHomeGalleryPhotos(
            homeGalleryCollection.docs.map((doc) => {
              return doc.data()
            })
          )
        )
      }
      fetchUsers()
    } catch (error) {
      console.warn(error)
    }
  }
}
