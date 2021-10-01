import db from '../../firebase'
import { SET_GALLERY_PAGE } from '../actionTypes'

export const setGallaryPageAction = (photos) => ({
  type: SET_GALLERY_PAGE,
  payload: photos,
})

export const setGallaryPage = () => {
  return function (dispatch) {
    const fetchUsers = async () => {
      const galleryPageCollection = await db.collection('GalleryPage').get()

      dispatch(
        setGallaryPageAction(
          galleryPageCollection.docs.map((doc) => {
            return doc.data()
          })
        )
      )
    }
    fetchUsers()
  }
}
