import { LANGUAGES } from '../../../Constants/languages'
import { useChangeLanguage } from '../../../Hooks/useLanguageHook'
import { useTranslate } from '../../../Hooks/useTranslate'
import { ModalComponent } from '../Modal/index'
import './styles.scss'

const WORDS = ['areYouEighteenText', 'confirmedText', 'unconfirmedText']

export const AgeConfirmationPopup = ({ isOpen, onClose }) => {
  const { onSetLanguage } = useChangeLanguage()
  const t = useTranslate(WORDS)

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <div className="agreement-popup">
        <div className="agreement-popup__content agreement-popup__content--mobile">
          <div className="agreement-popup__languages">
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

          <div className="agreement-popup__content-title">
            <h2>{t.areYouEighteenText}</h2>
          </div>
          <div className="agreement-popup__btns-wrapper">
            <div className="agreement-popup__btns-wrap agreement-popup__btns-wrap--active">
              <span
                onClick={onClose}
                role="button"
                tabIndex="0"
                onKeyDown={onClose}
              >
                {t.confirmedText}
              </span>
            </div>
            <div className="agreement-popup__btns-wrap">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                {t.unconfirmedText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </ModalComponent>
  )
}
