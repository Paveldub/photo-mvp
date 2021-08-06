import loader from '../../../assets/images/loader.svg'

export default function Spinner() {
  return (
    <div className="spinner">
      <img src={loader} alt="spinner" />
    </div>
  )
}
