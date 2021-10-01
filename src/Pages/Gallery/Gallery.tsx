import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GalleryList } from '../../Components/Common/GalleryList'
import { Loading } from '../../Components/Layout/Loader'
import { ScrollButton } from '../../Components/Layout/ScrollArrow'
import { useTranslate } from '../../Hooks/useTranslate'
import { setGallaryPage } from '../../redux/actions/galleryPageAction'
import { Container } from './Gallery.styles'
import './styles.scss'

const WORDS = ['galleryText']

export const Gallery = () => {
  const t = useTranslate(WORDS)
  const dispatch = useDispatch()
  const { items, isFetching } = useSelector((state) => state.galleyPage)

  useEffect(() => {
    dispatch(setGallaryPage())
  }, [])

  return (
    <>
      <ScrollButton />
      <div className="gallery-image-wrap" />
      <Container>
        <div className="gallery">
          <div className="gallery__title">
            <h1>{t.galleryText}</h1>
          </div>
          {isFetching ? <Loading /> : <GalleryList gallery={items} />}
        </div>
      </Container>
    </>
  )
}
