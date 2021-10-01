import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Route, Switch, useLocation } from 'react-router-dom'
import { Footer, Header } from './Components'
import { AgeConfirmationPopup } from './Components/Layout/AgeConfirmationPopup'
import { auth } from './firebase'
import {
  ContentWrapper,
  GlobalStyles,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'
import { setUser } from './redux/actions/setUsersAction'
import { routes } from './routes'
import './styles/_main.scss'

export const App = () => {
  const [isAgeConfirmation, setIsAgeConfirmation] = useState(true)
  const isLocalStorage = localStorage.getItem('ageConfirmation') === null
  const t = useTranslation()
  const location = useLocation().pathname.substring(1)
  const dispatch = useDispatch()

  const closeAgePopup = () => {
    setIsAgeConfirmation(!isAgeConfirmation)
    localStorage.setItem('ageConfirmation', 'CONFIRMED')
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [t])

  useEffect(() => {
    document.title = location
  }, [location])

  // if user signed in
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])

  return (
    <>
      {isAgeConfirmation && isLocalStorage ? (
        <AgeConfirmationPopup
          isOpen={isAgeConfirmation}
          onClose={closeAgePopup}
        />
      ) : null}

      <GlobalStyles />

      <Header />
      <ContentWrapper>
        <PagesWrapper>
          <Switch>
            {routes.map((item) => (
              <Route
                key={item.path}
                path={item.path}
                component={item.component}
                exact
              />
            ))}
          </Switch>
        </PagesWrapper>
      </ContentWrapper>

      <Footer />
    </>
  )
}
