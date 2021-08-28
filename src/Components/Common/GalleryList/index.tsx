import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

export const GalleryList = (props) => {
  const { gallery } = props

  console.log(props)

  return (
    <ul className="gallery__list">
      {gallery?.map((item, index) => {
        return (
          <li
            className={
              'gallery__item gallery__item--' + (index % 2 ? 'right' : 'left')
            }
            key={`${item?.id}_${item?.photo_title}`}
          >
            <Link
              to={`/photos/${item?.id}/${item?.photo_title}`}
              key={`${item?.id}_${item?.photo_title}`}
            >
              <LazyLoadImage
                src={item?.photo_url}
                effect="blur"
                alt={item?.photo_title}
                key={`${item?.id}_${item?.photo_title}`}
              />
              <div
                className="gallery__item-desc"
                key={`${item?.id}_${item?.photo_title}`}
              >
                <span>{item?.photo_title}</span>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
