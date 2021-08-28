import './styles.scss'

export const AboutPageMyInfo = (props) => {
  const { aboutMyInfo } = props

  return (
    <>
      {aboutMyInfo?.map((item) => {
        return (
          <>
            <div className="about-me">
              <div key={item?.data.id} className="about-me__wrap">
                <img
                  src={item?.data.about_me_photo}
                  alt={item?.data.about_title}
                />
              </div>
            </div>
            <p>test</p>
          </>
        )
      })}
    </>
  )
}
