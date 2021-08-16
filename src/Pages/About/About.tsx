import { useEffect, useState } from 'react'
import { AboutPageList } from '../../Components/Common/AboutPageList/AboutPageList'
import { Loading } from '../../Components/Layout/Loader'
import db from '../../firebase'
import { useTranslate } from '../../Hooks/useTranslate'
import { Container } from './About.styles'
import './styles.scss'

const WORDS = ['aboutPageTitle']

export const About = () => {
  const [magazineData, setMagazineData] = useState([])
  const [loading, setLoading] = useState(true)
  const t = useTranslate(WORDS)

  useEffect(() => {
    db.collection('aboutPage').onSnapshot((snapshot) => {
      setMagazineData(
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
    <Container>
      <div className="about-page-title">
        <h1>{t.aboutPageTitle}</h1>
      </div>
      <AboutPageList aboutData={magazineData} />
    </Container>
  )
}
