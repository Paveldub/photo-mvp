import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link } from 'react-router-dom'
import mainImage from '../../assets/images/main-image.jpg'
import { HomeGallery } from '../../Components/Common/HomeGallery'
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
    db.collection('homePage').onSnapshot((snapshot) => {
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
        <div />
        <LazyLoadImage
          className="main-image-wrap"
          src={mainImage}
          // style={{ backgroundImage: `url(${})` }}
          effect="blur"
          height="100%"
          width="100%"
        />
      </article>

      <article>
        <div className="container">
          <div className="new-projects-title">
            <Link to="/gallery">{t.newFeaturedProjectsText}</Link>
          </div>
          <HomeGallery photo={photos} />
        </div>
      </article>
    </>
  )
}
