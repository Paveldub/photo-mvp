import { useEffect, useState } from 'react'
import { Slider } from '../../Components'
import { Loading } from '../../Components/Layout/Loader'
import db from '../../firebase'
import './styles.scss'

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
    return <Loading />
  }

  return (
    <>
      <div className="main-image-wrap">
        <div className="main-image-wrap__title">
          <h1>By Pavel Demidovich</h1>
        </div>
      </div>
      <div className="slider-wrapper">
        <Slider photo={photos} />
      </div>
    </>
  )
}
