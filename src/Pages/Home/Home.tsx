import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link } from 'react-router-dom'
import mainImage from '../../assets/images/main-image.webp'
import { HomeGallery } from '../../Components/Common/HomeGallery'
import { ScrollButton } from '../../Components/Layout/ScrollArrow'
import { useTranslate } from '../../Hooks/useTranslate'
import './styles.scss'

const WORDS = ['newFeaturedProjectsText']

export const Home = () => {
  const t = useTranslate(WORDS)

  return (
    <>
      <ScrollButton />

      <div className="new-project-background">
        <LazyLoadImage
          className="main-image-wrap"
          src={mainImage}
          effect="blur"
          height="100%"
          width="100%"
        />
      </div>

      <div className="new-projects-title">
        <Link to="/gallery">{t.newFeaturedProjectsText}</Link>
      </div>

      <div className="container">
        <HomeGallery />
      </div>
    </>
  )
}
