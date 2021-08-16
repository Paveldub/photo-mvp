import { useTranslate } from '../../Hooks/useTranslate'
import './styles.scss'

const WORDS = ['galleryText']

export const Gallery = () => {
  const t = useTranslate(WORDS)

  return (
    <>
      <h1>{t.galleryText}</h1>
    </>
  )
}
