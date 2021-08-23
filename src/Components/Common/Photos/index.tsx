import firebase from 'firebase/app'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Container } from '../../../Pages/About/About.styles'
import './styles.scss'

export const PhotoDetails = () => {
  const storage = firebase.storage()
  const storageRef = storage.ref()
  const location = useLocation()
  const storageUrl = location.pathname.substr(11)
  const [photoset, setPhotoset] = useState([])

  useEffect(() => {
    storageRef
      .child(storageUrl)
      .listAll()
      .then((res) => {
        const promises = res.items.map((item) => item.getDownloadURL())

        Promise.all(promises).then((downloadURLs) => {
          setPhotoset(downloadURLs)
        })
      })
  }, [])

  return (
    <Container>
      <ul>
        {photoset?.map((item) => {
          return (
            <li className="size" key={item}>
              <img src={item} alt={item} />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
