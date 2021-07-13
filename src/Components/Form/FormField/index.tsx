export const FormField = (props) => {
  const {
    label,
    tooltip,
    name,
    register,
    type,
    onChange,
    maxLength,
    onBlur,
    // error,
  } = props

  return (
    <div>
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

      {tooltip && (
        <div className="hint-text">
          <span>{tooltip}</span>
        </div>
      )}
      {/* {error && <ErrorMessage message={error.message} />} */}
    </div>
  )
}
