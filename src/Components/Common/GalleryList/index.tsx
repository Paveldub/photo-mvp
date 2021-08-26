import { LazyLoadImage } from 'react-lazy-load-image-component'

export const GalleryList = (props) => {
  const { gallery } = props

  return (
    <ul className="gallery__list">
      {gallery?.map((item, index) => {
        return (
          <li
            className={
              'gallery__item gallery__item--' + (index % 2 ? 'right' : 'left')
            }
            key={item.data.id}
          >
            <LazyLoadImage
              src={item?.data.photo_url}
              effect="blur"
              alt={item?.data.photo_title}
            />
            <div className="gallery__item-desc">
              <span>{item?.data.photo_title}</span>
              <p>{item?.data.photo_description}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
