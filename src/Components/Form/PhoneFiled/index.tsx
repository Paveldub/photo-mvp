import { Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'

const MAX_LENGTH = 17

export const PhoneField = (props) => {
  const { label, name, register, control, onChange } = props

  return (
    <div className="phone">
      <label>
        {label}
        <div className="phone-wrap">
          <Controller
            name={name}
            rules={register}
            control={control}
            shouldUnregister={true}
            render={(props) => (
              <InputMask
                alwaysShowMask
                mask="+999 99 999-99-99"
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
        </div>
      </label>
    </div>
  )
}
