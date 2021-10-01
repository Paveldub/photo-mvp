import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThankYouPopup } from '../../Components/Layout/ThankYouPopup'
import { registerInitiate } from '../../redux/actions/userRegistrationAction'
import './styles.scss'

export const Register = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.user)
  const [congratulationPopup, setCongratulationPopup] = useState(false)

  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const { email, password, displayName, passwordConfirm } = state

  useEffect(() => {
    if (currentUser) {
      setTimeout(() => {
        setCongratulationPopup(!congratulationPopup)
      }, 1000)
    }
  }, [currentUser, history])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      return
    }

    dispatch(registerInitiate(email, password, displayName))
    setState({ displayName: '', email: '', password: '', passwordConfirm: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  console.log(currentUser)

  return (
    <>
      <div className="gallery-image-wrap" />
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="gallery">
          <span>{currentUser ? currentUser.displayName : 'nullll'}</span>
          <form onSubmit={handleSubmit}>
            <h3
              style={{
                textAlign: 'center',
              }}
            >
              Sign UP
            </h3>
            <div className="inputs-wrapper">
              <label>
                Name
                <input
                  type="text"
                  id="displayName"
                  placeholder="name"
                  name="displayName"
                  onChange={handleChange}
                  value={displayName}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  id="user-email"
                  placeholder="email address"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                  required
                />
              </label>
              <label>
                Password Confirmation
                <input
                  type="password"
                  id="inputPasswordConfirm"
                  placeholder="password confirmation"
                  name="passwordConfirm"
                  onChange={handleChange}
                  value={passwordConfirm}
                  required
                />
              </label>
              <button type="submit">Sign up</button>
            </div>

            <Link to="/login">Back</Link>
          </form>
        </div>
      </div>

      <ThankYouPopup
        isOpen={congratulationPopup}
        onClose={setCongratulationPopup}
      />
    </>
  )
}
