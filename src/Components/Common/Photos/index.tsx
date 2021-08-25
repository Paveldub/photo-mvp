import firebase from 'firebase/app'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Container } from '../../../Pages/About/About.styles'
import { Loading } from '../../Layout/Loader'
import { WebPImage } from '../../Layout/WebPImage/indext'
import './styles.scss'

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
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {photoset?.map((item) => {
            return (
              <li className="size" key={item}>
                <WebPImage webPImage={item} jpgImage={item} imgElem={item} />
              </li>
            )
          })}
        </ul>
      )}
    </Container>
  )
}
