import { useSelector } from 'react-redux'
import { Route } from 'react-router'
import { LoadingRedirect } from '../LoadingRedirect/LoadingRedirect'

export const UserRoute = ({ ...rest }) => {
  const { currentUser } = useSelector((state) => state.user)

  return currentUser ? <Route {...rest} /> : <LoadingRedirect />
}
