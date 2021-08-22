import { useEffect, useState } from 'react'
import { AboutPageList } from '../../Components/Common/AboutPageList/AboutPageList'
import { AboutPageMyInfo } from '../../Components/Common/AboutPageMyInfo'
import { Loading } from '../../Components/Layout/Loader'
import db from '../../firebase'
import { useTranslate } from '../../Hooks/useTranslate'
import { Container } from './About.styles'
import './styles.scss'

const WORDS = ['aboutPageTitle', 'aboutMeText']

export const About = () => {
  const [magazineData, setMagazineData] = useState([])
  const [myInfo, setMyInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const t = useTranslate(WORDS)

  useEffect(() => {
    db.collection('aboutPageMyInfo').onSnapshot((snapshot) => {
      setMyInfo(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
      setLoading(false)
    })
  }, [loading])

  useEffect(() => {
    db.collection('aboutPageMagazines').onSnapshot((snapshot) => {
      setMagazineData(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
      setLoading(false)
    })
  }, [loading])

  return (
    <>
      <div className="about-image-wrap" />

      <Container>
        {loading ? (
          <Loading />
        ) : (
          <div className="about-page">
            <div className="about-page-title">
              <h1>{t.aboutMeText}</h1>
            </div>
            <AboutPageMyInfo aboutMyInfo={myInfo} />

            <div className="about-page-title">
              <h1>{t.aboutPageTitle}</h1>
            </div>
            <AboutPageList aboutData={magazineData} />
          </div>
        )}
      </Container>
    </>
  )
}
