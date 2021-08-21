import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link } from 'react-router-dom'
import './styles.scss'

export const HomeGallery = (props) => {
  const { photo } = props

  return (
    <div className="new-projects">
      <ul className="new-projects__list">
        {photo
          .slice()
          .sort(() => 0.5 - Math.random())
          .map((item) => {
            return (
              <Link to={`/photos/${item?.data.id}`} key={item?.data.id}>
                <li>
                  <LazyLoadImage
                    src={item?.data.photo_url}
                    effect="blur"
                    alt={item?.data.photo_title}
                    height="450px"
                  />
                  <span>{item?.data.photo_title}</span>
                </li>
              </Link>
            )
          })}
      </ul>
    </div>
  )
}
