export const AboutPageList = (props) => {
  const { aboutData } = props

  return (
    <ul>
      {aboutData?.map((item) => {
        return (
          <>
            <li key={item.data.id}>
              <h2>{item.data.magazine_title}</h2>
              <div className="about-page-urls">
                <a href={item.data.magazine_url}>{item.data.url_title}</a>
                <a href={item.data.magazine_url2}>{item.data.url_title2}</a>
              </div>
            </li>
          </>
        )
      })}
    </ul>
  )
}
