import { useTranslation } from 'react-i18next'

export const ErrorMessage = ({ message }) => {
  const { t } = useTranslation()
  return (
    <div className="error error--active">
      <span>{t(message)}</span>
    </div>
  )
}
