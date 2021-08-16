import { useEffect, useState } from 'react'
import { AboutPageList } from '../../Components/Common/AboutPageList/AboutPageList'
import { Loading } from '../../Components/Layout/Loader'
import db from '../../firebase'
import { Container } from './About.styles'

export const About = () => {
  const [magazineData, setMagazineData] = useState([])
  const [loading, setLoading] = useState(true)

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
      <AboutPageList aboutData={magazineData} />
    </Container>
  )
}
