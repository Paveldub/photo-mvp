import './styles.scss'

export const AboutPageMyInfo = (props) => {
  const { aboutMyInfo } = props

  return (
    <>
      {aboutMyInfo?.map((item) => {
        return (
          <>
            <div key={item?.data.id} className="about-me-wrap">
              <img
                src={item?.data.about_me_photo}
                alt={item?.data.about_title}
              />
              <p>{item?.data.about_me_description}</p>
            </div>
          </>
        )
      })}
    </>
  )
}
