import classnames from 'classnames'
import { ErrorMessage } from '../../Common/ErrorMessage'

export const CheckBoxField = ({ label, name, register, error, type }) => {
  const formInputClassName = classnames('form-checkobox__input', {
    'form-checkobox__input--error': error,
  })

  return (
    <div className={formInputClassName}>
      <label className="checkbox-elem" htmlFor={name}>
        <p>{label}</p>
        <input id={name} name={name} type={type} ref={register} />
        <span className="checkmark" />
      </label>

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
