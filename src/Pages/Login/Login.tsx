import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { facebookSignInitiate } from '../../redux/actions/facebookSignInAction'
import { googleSignInitiate } from '../../redux/actions/googleSignInAction'
import { loginInitiate } from '../../redux/actions/userLoginAction'
import './styles.scss'

export const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { email, password } = state

  useEffect(() => {
    if (currentUser) {
      setTimeout(() => {
        Cookies.set('currentUser', currentUser.displayName, { expires: 7 })
        alert('USER SIGNED IN')
      }, 1000)
    }
  }, [currentUser])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      return
    }

    dispatch(loginInitiate(email, password))
    setState({ email: '', password: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInitiate())
  }

  const handleFacebookSignIn = () => {
    dispatch(facebookSignInitiate())
  }

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
          <form onSubmit={handleSubmit}>
            <h3
              style={{
                textAlign: 'center',
              }}
            >
              Sign in
            </h3>
            <div className="social-login">
              <button type="button" onClick={handleGoogleSignIn}>
                Google
              </button>
              <button type="button" onClick={handleFacebookSignIn}>
                Facebook
              </button>
            </div>
            <div className="inputs-wrapper">
              <label>
                Email
                <input
                  type="email"
                  id="userEmail"
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
              <button type="submit">Sign In</button>
            </div>

            <h3>Dont have an account?</h3>
            <Link to="/signup">Sign up</Link>
          </form>
        </div>
      </div>
    </>
  )
}
