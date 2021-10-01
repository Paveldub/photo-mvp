import { useDispatch, useSelector } from 'react-redux'
import { logoutInitiate } from '../../redux/actions/logoutAction'

export const WelcomePage = () => {
  const dispatch = useDispatch()

  const { currentUser } = useSelector((state) => state.user)

  const logOut = () => {
    if (currentUser) {
      dispatch(logoutInitiate())
    }
  }

  return (
    <>
      <div>Welcome to my website</div>
      <button onClick={logOut}>Log out</button>
    </>
  )
}
