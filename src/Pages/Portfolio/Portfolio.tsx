import { useTranslate } from '../../Hooks/useTranslate'
import { Container } from './Portfolio.styles'

const WORDS = ['mainTitle']

export const Portfolio = () => {
  const t = useTranslate(WORDS)

  return (
    <>
      <Container>
        <h1>{t.mainTitle}</h1>
      </Container>
    </>
  )
}
