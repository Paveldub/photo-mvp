import { useTranslate } from '../../Hooks/useTranslate'
import './styles.scss'

const WORDS = ['galleryText']

export const Gallery = () => {
  const t = useTranslate(WORDS)

  return (
    <>
      <article>
        <div className="gallery-image-wrap" />
      </article>
      <h1>{t.galleryText}</h1>
    </>
  )
}
