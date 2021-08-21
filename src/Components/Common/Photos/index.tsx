import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import db from '../../../firebase'
import { Loading } from '../../Layout/Loader'

export const PhotoDetails = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    db.collection('Sincerity').onSnapshot((snapshot) => {
      setPhotos(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
      setLoading(false)
    })
  }, [loading])

  return (
    <>
      <h1>Photo details</h1>
      {photos?.map((item) => {
        return (
          <>
            {loading ? (
              <Loading />
            ) : (
              <li>
                <LazyLoadImage
                  src={item?.data.photo_url}
                  effect="blur"
                  alt={item?.data.photo_title}
                  height="450px"
                />
                <span>{item?.data.photo_title}</span>
              </li>
            )}
          </>
        )
      })}
    </>
  )
}
