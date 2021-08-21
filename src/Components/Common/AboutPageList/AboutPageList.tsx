import './styles.scss'

export const AboutPageList = (props) => {
  const { aboutData } = props

  return (
    <ul>
      {aboutData?.map((item) => {
        console.log(item)

        return (
          <>
            <h2>{item?.data.about_title}</h2>
            <h1>{item?.data.about_me_description}</h1>
            <img src={item?.data.about_me_photo} alt="" />

            <li key={item.data.id}>
              <h2>{item.data.magazine_title}</h2>
              <div className="about-page-urls">
                <a
                  href={item.data.magazine_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.data.url_title}
                </a>
                <a
                  href={item.data.magazine_url2}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.data.url_title2}
                </a>
              </div>
            </li>
          </>
        )
      })}
    </ul>
  )
}
