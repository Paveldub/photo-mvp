import { useEffect, useState } from 'react'
import { GalleryList } from '../../Components/Common/GalleryList'
import { Loading } from '../../Components/Layout/Loader'
import db from '../../firebase'
import { useTranslate } from '../../Hooks/useTranslate'
import { Container } from './Gallery.styles'
import './styles.scss'

const WORDS = ['galleryText']

export const Gallery = () => {
  const t = useTranslate(WORDS)

  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    db.collection('galleryPage').onSnapshot((snapshot) => {
      setGallery(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
      setLoading(false)
    })
  }, [loading])

  return (
    <>
      <div className="gallery-image-wrap" />
      <Container>
        <div className="gallery">
          <div className="gallery__title">
            <h1>{t.galleryText}</h1>
          </div>
          {loading ? <Loading /> : <GalleryList gallery={gallery} />}
        </div>
      </Container>
    </>
  )
}
