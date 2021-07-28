import { useTranslate } from '../../../Hooks/useTranslate'
import { ModalComponent } from '../Modal/index'
import './styles.scss'

const WORDS = ['areYouEighteenText']

export const AgeConfirmationPopup = ({ isOpen, onClose }) => {
  const t = useTranslate(WORDS)

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <div className="agreement-popup">
        <div className="agreement-popup__content agreement-popup__content--mobile">
          <div className="agreement-popup__content-title">
            <h2>{t.areYouEighteenText}</h2>
          </div>
          <div className="agreement-popup__btns-wrapper">
            <div className="agreement-popup__btns-wrap">
              <span
                onClick={onClose}
                role="button"
                tabIndex="0"
                onKeyDown={onClose}
              >
                Да
              </span>
            </div>
            <div className="agreement-popup__btns-wrap">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                Нет
              </a>
            </div>
          </div>
        </div>
      </div>
    </ModalComponent>
  )
}
