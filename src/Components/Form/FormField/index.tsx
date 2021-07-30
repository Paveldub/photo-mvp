import './styles.scss'

export const FormField = (props) => {
  const { label, name, register, type, onChange, maxLength, onBlur } = props

  return (
    <div className="form__input">
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
      </label>
    </div>
  )
}
