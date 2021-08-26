import firebase from 'firebase/app'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useLocation } from 'react-router'
import { Loading } from '../../Layout/Loader'
import { WebPImage } from '../../Layout/WebPImage/indext'

export const PhotoDetails = () => {
  const storage = firebase.storage()
  const storageRef = storage.ref()
  const location = useLocation()
  const storageUrl = location.pathname.substr(11)
  const [photoset, setPhotoset] = useState([])
  const [loading, setLoading] = useState(true)

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
                {photoset?.map((item) => {
                  return (
                    <>
                      <li className="size" key={`${item}`}>
                        <WebPImage
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
