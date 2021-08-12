import { HOME_PATH } from '../../../App'
import notFound from '../../../assets/images/page-not-found.jpg'
import { useTranslate } from '../../../Hooks/useTranslate'
import './styles.scss'

export const PageNotFound = () => {
  const t = useTranslate(['pageNotFoundText', 'pageNotFoundButtonText'])

  return (
    <>
      <div className="not-found">
        <div className="not-found__heading">
          <h1>{t.pageNotFoundText}</h1>
        </div>
        <div className="not-found__image">
          <img src={notFound} alt="error-404" />
        </div>
        <div className="not-found__button">
          <a href={HOME_PATH}>{t.pageNotFoundButtonText}</a>
        </div>
      </div>
    </>
  )
}
