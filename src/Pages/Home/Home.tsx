import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NewFeaturedProjects } from '../../Components/Common/NewFeaturedProjects'
import { Loading } from '../../Components/Layout/Loader'
import db from '../../firebase'
import { useTranslate } from '../../Hooks/useTranslate'
import './styles.scss'

const WORDS = ['newFeaturedProjectsText']

export const Home = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const t = useTranslate(WORDS)

  useEffect(() => {
    db.collection('photos').onSnapshot((snapshot) => {
      setPhotos(
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
    <>
      <article>
        <div className="main-image-wrap" />
      </article>

      <article>
        <div className="container">
          <div className="new-projects-title">
            <Link to="/gallery">{t.newFeaturedProjectsText}</Link>
          </div>
          <NewFeaturedProjects photo={photos} />
        </div>
      </article>
    </>
  )
}
