import classnames from 'classnames'
import { ErrorMessage } from '../../Common/ErrorMessage'
import './styles.scss'

export const FormField = (props) => {
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
          {...props}
          maxLength={maxLength}
          name={name}
          ref={register}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
