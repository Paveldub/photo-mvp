import './styles.scss'

export const NewFeaturedProjects = (props) => {
  const { photo } = props

  return (
    <div className="new-projects">
      <ul className="new-projects__list">
        {photo?.map((item) => {
          return (
            <li key={`${item?.data.id}`}>
              <img src={item?.data.photo_url} alt="img" />
              <span>{item?.data.photo_title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
