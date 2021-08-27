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
    const fetchUsers = async () => {
      const usersCollection = await db.collection('GalleryPage').get()
      setGallery(
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
