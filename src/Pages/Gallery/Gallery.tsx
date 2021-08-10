import { useTranslate } from '../../Hooks/useTranslate'
import { Container } from './Gallery.styles'

const WORDS = ['galleryText']

export const Gallery = () => {
  const t = useTranslate(WORDS)

  return (
    <>
      <Container>
        <h1>{t.galleryText}</h1>
      </Container>
    </>
  )
}
