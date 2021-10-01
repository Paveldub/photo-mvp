import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { LANGUAGES } from '../../../Constants/languages'
import { SOCIAL_NETWORK_LINKS } from '../../../Constants/socials'
import { useChangeLanguage } from '../../../Hooks/useLanguageHook'
import { usePreventScroll } from '../../../Hooks/usePreventScroll'
import { useTranslate } from '../../../Hooks/useTranslate'
import { Icon } from '../../Common/Icon/index'
import { SocialIconLink } from '../Footer/Footer.styles'
import './styles.scss'

const WORDS = [
  'mainPageText',
  'galleryPageText',
  'aboutPageText',
  'contactPageText',
  'socialsText',
  'loginPageText',
]

function SideBarBackDrop({ onClose }) {
  usePreventScroll()

  return (
    <div
      onClick={onClose}
      onKeyDown={onClose}
      role="button"
      tabIndex="0"
      className="sidebar__bg"
    />
  )
}

export const Sidebar = ({ isOpen, onClose }) => {
  const sideBarClassName = classnames('sidebar', { 'sidebar--active': isOpen })
  const t = useTranslate(WORDS)
  const { onSetLanguage } = useChangeLanguage()

  return (
    <>
      {isOpen && (
        <SideBarBackDrop
          onClose={onClose}
          onKeyDown={onClose}
          role="button"
          tabIndex="0"
        />
      )}

      <div className={sideBarClassName}>
        <div
          className="sidebar-close"
          role="button"
          onClick={onClose}
          onKeyDown={onClose}
          tabIndex={0}
        >
          <Icon
            className="sidebar-close__icon"
            icon="close"
            size="15px"
            color="#ccd5df"
          />
        </div>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Link to="/" onKeyDown={onClose} onClick={onClose}>
              {t.mainPageText}
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/gallery" onKeyDown={onClose} onClick={onClose}>
              {t.galleryPageText}
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/about" onKeyDown={onClose} onClick={onClose}>
              {t.aboutPageText}
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/contact" onKeyDown={onClose} onClick={onClose}>
              {t.contactPageText}
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/login" onKeyDown={onClose} onClick={onClose}>
              {t.loginPageText}
            </Link>
          </li>
        </ul>
        <div className="sidebar__socials">
          <div>{t.socialsText}</div>
          <div className="sidebar__socials-direction">
            {SOCIAL_NETWORK_LINKS.map((item) => (
              <SocialIconLink key={item.icon} href={item.href} target="_blank">
                <Icon icon={item.icon} size="25px" />
              </SocialIconLink>
            ))}
          </div>
        </div>
        <div className="sidebar__lang">
          {LANGUAGES.map((item) => (
            <span
              key={item.id}
              onClick={() => onSetLanguage(item)}
              onKeyDown={() => onSetLanguage(item)}
              role="button"
              tabIndex="0"
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
