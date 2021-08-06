import { useEffect, useState } from 'react'
import { Slider } from '../../Components'
import db from '../../firebase'

export const Home = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    db.collection('photos').onSnapshot((snapshot) => {
      setPhotos(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
    })
  }, [])

  return (
    <>
      <Slider photo={photos} />
    </>
  )
}
