import classnames from 'classnames'
import { Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { PREFIX_PHONE_CODE } from '../../../Constants/phoneNumbers'
import { ErrorMessage } from '../../Common/ErrorMessage'

const MAX_LENGTH = 12

export const PhoneField = (props) => {
  const { label, name, register, error, control, onChange, autoComplete } =
    props

  const phoneInputClassName = classnames('form__input', {
    'form__input--active': error,
  })

  return (
    <div className={phoneInputClassName}>
      <label>
        {label}
        <div className="phone-wrap">
          <Controller
            name={name}
            rules={register}
            control={control}
            shouldUnregister={true}
            autoComplete={autoComplete}
            render={(props) => (
              <InputMask
                alwaysShowMask
                mask="99 999-99-99"
                maskChar=""
                {...props}
                onChange={onChange}
              >
                {(inputProps) => (
                  <input {...inputProps} type="tel" maxLength={MAX_LENGTH} />
                )}
              </InputMask>
            )}
            defaultValue=""
          />
          <span className="phone-num">+{PREFIX_PHONE_CODE}</span>
        </div>
      </label>

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
