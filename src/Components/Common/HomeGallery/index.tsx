import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './styles.scss'

export const HomeGallery = (props) => {
  const { photo } = props

  return (
    <div className="new-projects">
      <ul className="new-projects__list">
        {photo?.map((item) => {
          return (
            <li key={`${item?.data.id}`}>
              <LazyLoadImage
                src={item?.data.photo_url}
                effect="blur"
                alt={item?.data.photo_title}
                height="450px"
                width="100%"
              />
              <span>{item?.data.photo_title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
