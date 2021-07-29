import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { usePreventScroll } from '../../../Hooks/usePreventScroll'
import { useTranslate } from '../../../Hooks/useTranslate'
import { Icon } from '../../Common/Icon/index'
import './styles.scss'

const WORDS = [
  'mainPageText',
  'galleryPageText',
  'aboutPageText',
  'contactPageText',
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
            <Link to="/contactus" onKeyDown={onClose} onClick={onClose}>
              {t.contactPageText}
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
