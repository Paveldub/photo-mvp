import classnames from 'classnames'
import { PREFIX_TELEGRAM } from '../../../Constants/phoneNumbers'
import { ErrorMessage } from '../../Common/ErrorMessage'

export const TelegramField = (props) => {
  const { label, name, register, error, type, onChange, maxLength, onBlur } =
    props

  const formInputClassName = classnames('form__input', {
    'form__input--active': error,
  })

  return (
    <div className={formInputClassName}>
      <label>
        {label}

        <input
          maxLength={maxLength}
          name={name}
          ref={register}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span className="prefix">{PREFIX_TELEGRAM}</span>
      </label>

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
