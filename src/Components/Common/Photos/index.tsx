import firebase from 'firebase/app'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useLocation } from 'react-router'
import db from '../../../firebase'
import { Loading } from '../../Layout/Loader'
import { PhotoModelsData } from '../PhotoModelsData'

export const PhotoDetails = () => {
  const storage = firebase.storage()
  const storageRef = storage.ref()
  const location = useLocation()
  const storageUrl = location.pathname.substr(11)
  const [photoset, setPhotoset] = useState([])
  const [loading, setLoading] = useState(true)
  const [modelsData, setModelsData] = useState([])

  useEffect(() => {
    storageRef
      .child(storageUrl)
      .listAll()
      .then((res) => {
        const promises = res.items.map((item) => item.getDownloadURL())

        Promise.all(promises).then((downloadURLs) => {
          setPhotoset(downloadURLs)
        })
        setLoading(false)
      })
  }, [loading])

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection('homeGallery').get()
      setModelsData(
        usersCollection.docs.map((doc) => {
          return doc.data()
        })
      )
      setLoading(false)
    }
    fetchUsers()
  }, [loading])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="photo-component-top" key={`${photoset[0]}_1`}>
            <LazyLoadImage
              className="main-image-wrap"
              src={photoset[0]}
              effect="blur"
              height="100%"
              width="100%"
            />
            <h2 className="photo-component-top__title">{storageUrl}</h2>
          </div>

          <div className="photo-component">
            <div className="container">
              <ul className="photo-component__list">
                {modelsData?.map((data) => {
                  if (data?.photo_title === storageUrl) {
                    return (
                      <>
                        <li
                          className="photo-component__item"
                          key={`${data?.photo_title}`}
                        >
                          <span className="photo-component__item-name">
                            <a
                              href={data?.photographer_instagram}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {data?.photographer_name}
                            </a>
                          </span>
                          <span className="photo-component__item-name">
                            <a
                              href={data?.model_instagram}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {data?.model_name}
                            </a>
                          </span>
                          <span
                            className="photo-component__item-name"
                            key={`${data?.photo_title}_${data?.model_instagram}`}
                          >
                            <a
                              href={data?.model_instagram}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {data?.model_name_1}
                            </a>
                          </span>
                          <span className="photo-component__item-name">
                            {data?.film_1}
                          </span>
                        </li>
                      </>
                    )
                  }
                })}
                {photoset?.map((item, index) => {
                  return (
                    <>
                      <li className="size" key={`${item}_${index}`}>
                        <PhotoModelsData
                          webPImage={item}
                          jpgImage={item}
                          imgElem={item}
                          altText={storageUrl}
                        />
                      </li>
                    </>
                  )
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  )
}
