import { useSelector } from 'react-redux'
import { useTranslate } from '../../../Hooks/useTranslate'
import { ModalComponent } from '../Modal/index'
import './styles.scss'

const WORDS = ['areYouEighteenText', 'confirmedText', 'unconfirmedText']

export const ThankYouPopup = ({ isOpen, onClose }) => {
  const t = useTranslate(WORDS)
  const { currentUser } = useSelector((state) => state.user)

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <div className="agreement-popup">
        <div className="agreement-popup__content agreement-popup__content--mobile">
          <div className="agreement-popup__content-title">
            <h2>
              Thank you for your registration{' '}
              {currentUser ? currentUser.displayName : 'nullll'}
              and get your 20% discout
            </h2>
          </div>
          <div className="agreement-popup__btns-wrapper">
            <div className="agreement-popup__btns-wrap">
              <span
                onClick={onClose}
                role="button"
                tabIndex="0"
                onKeyDown={onClose}
              >
                {t.unconfirmedText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ModalComponent>
  )
}
