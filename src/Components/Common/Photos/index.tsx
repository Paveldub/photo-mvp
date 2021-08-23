import firebase from 'firebase/app'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Container } from '../../../Pages/About/About.styles'
import './styles.scss'

export const PhotoDetails = () => {
  const storage = firebase.storage()
  const storageRef = storage.ref()
  const history = useHistory()

  const [photoset, setPhotoset] = useState([])

  useEffect(() => {
    storageRef
      .child(history.location.pathname.substr(11))
      .listAll()
      .then((result) => {
        result.items.map((imageref) => {
          imageref.getDownloadURL().then((url) => {
            console.log(url)

            setPhotoset(url)
          })
        })
      })
  }, [])

  return (
    <Container>
      <ul>
        <>
          <li className="size">
            <span>photo component</span>
            {/* {photoset.map((item) => console.log(item))} */}
            <img src={photoset} alt={photoset} />
          </li>
        </>
      </ul>
    </Container>
  )
}
