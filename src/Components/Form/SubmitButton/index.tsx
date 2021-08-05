import './styles.scss'

export const SubmitButton = ({ label }) => {
  return (
    <div className="form__button">
      <button type="submit">{label}</button>
    </div>
  )
}
