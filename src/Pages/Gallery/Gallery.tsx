import { useEffect, useState } from 'react'
import { Slider } from '../../Components'
import { Loading } from '../../Components/Layout/Loader'
import db from '../../firebase'
import { useTranslate } from '../../Hooks/useTranslate'
import { Container } from './Gallery.styles'

const WORDS = ['galleryText']

export const Gallery = () => {
  const t = useTranslate(WORDS)

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
      <Container>
        <h1>{t.galleryText}</h1>
      </Container>

      <Slider photo={photos} />
    </>
  )
}
