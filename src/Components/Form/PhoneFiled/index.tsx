import classnames from 'classnames'
import { Controller, useController } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { PREFIX_PHONE_CODE } from '../../../Constants/phoneNumbers'
import { ErrorMessage } from '../../Common/ErrorMessage'

const MAX_LENGTH = 12

const getPasteClient = (e) => {
  if (e.clipboardData && e.clipboardData.getData) {
    return e.clipboardData.getData('text/plain')
  } else {
    if (window.clipboardData && window.clipboardData.getData) {
      return window.clipboardData.getData('Text')
    } else {
      return null
    }
  }
}

export const PhoneField = (props) => {
  const { label, name, register, error, control, onChange, autoComplete } =
    props

  const { field } = useController({
    name,
    control,
    rules: register,
  })

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
                onPaste={(e) => {
                  let paste = getPasteClient(e)
                  paste = paste.replace(/[^0-9]/g, '')
                  setTimeout(() => {
                    if (paste.indexOf('375') === 0) {
                      field.onChange(paste.slice(3))
                    } else {
                      field.onChange(paste)
                    }
                  }, 25)
                }}
              >
                {(inputProps) => (
                  <input {...inputProps} type="tel" maxLength={MAX_LENGTH} />
                )}
              </InputMask>
            )}
            defaultValue=""
          />
          <span className="prefix">+{PREFIX_PHONE_CODE}</span>
        </div>
      </label>

      {error && <ErrorMessage message={error.message} />}
    </div>
  )
}
