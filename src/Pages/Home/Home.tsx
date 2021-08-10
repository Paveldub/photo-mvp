import { useEffect, useState } from 'react'
import { Slider } from '../../Components'
import { Loader } from '../../Components/Layout/Loader'
import db from '../../firebase'

export const Home = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    db.collection('photos').onSnapshot((snapshot) => {
      setPhotos(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
      setLoading(false)
    })
  }, [loading])

  if (loading) {
    return <Loader setLoading={setLoading} />
  }

  return (
    <>
      <Slider photo={photos} />
    </>
  )
}
