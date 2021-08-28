import { Link } from 'react-router-dom'
import { useTranslate } from '../../../Hooks/useTranslate'
import './styles.scss'

const WORDS = ['contactText', 'textMeText']

export const AboutPageList = (props) => {
  const { aboutData } = props
  const t = useTranslate(WORDS)

  return (
    <>
      <ul>
        {aboutData?.map((item) => {
          return (
            <>
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
      <div className="about-me__contacts">
        <span>{t.contactText}</span>
        <Link to="/contact">{t.textMeText}</Link>
      </div>
      <div className="about-me__links"></div>
    </>
  )
}
