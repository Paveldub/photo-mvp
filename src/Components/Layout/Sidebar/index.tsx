import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { Icon } from '../../Common/Icon/index'
import './styles.scss'

export const Sidebar = ({ isOpen, onClose }) => {
  const sideBarClassName = classnames('sidebar', { 'sidebar--active': isOpen })

  return (
    <>
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
              Home
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/gallery" onKeyDown={onClose} onClick={onClose}>
              Gallery
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/about" onKeyDown={onClose} onClick={onClose}>
              About
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/contactus" onKeyDown={onClose} onClick={onClose}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
