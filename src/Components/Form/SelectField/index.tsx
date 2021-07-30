import { useTranslation } from 'react-i18next'

export const SelectField = (props) => {
  const { t } = useTranslation()

  const { label, options, register, name, onBlur } = props

  return (
    <div className="general__select">
      <div className="selectdiv">
        <label>{label} </label>
        <select ref={register} name={name} onBlur={onBlur}>
          <option value="" hidden />
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {t(item.title)}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
