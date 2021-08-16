import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Route, Switch } from 'react-router-dom'
import { Footer, Header } from './Components'
import { AgeConfirmationPopup } from './Components/Layout/AgeConfirmationPopup'
import { STEPS } from './Constants/steps'
import {
  ContentWrapper,
  GlobalStyles,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'
import { routes } from './routes'
import { getPathname } from './utils/getPathName'

export {
  ABOUT_PATH,
  CONTACTS_PATH,
  GALLERY_PATH,
  HOME_PATH,
} from './Constants/paths'

const titles = {
  1: 'homePageTitle',
  2: 'galleryPageTitle',
  3: 'aboutPageTitle',
  4: 'contactPageTitle',
}

export const App = () => {
  const { t } = useTranslation()
  const pageStep = getPathname(location)

  const step = STEPS[pageStep]

  const [isAgeConfirmation, setIsAgeConfirmation] = useState(true)
  const isLocalStorage = localStorage.getItem('ageConfirmation') === null

  const closeAgePopup = () => {
    setIsAgeConfirmation(!isAgeConfirmation)
    localStorage.setItem('ageConfirmation', 'CONFIRMED')
  }

  return (
    <>
      {isAgeConfirmation && isLocalStorage ? (
        <AgeConfirmationPopup
          isOpen={isAgeConfirmation}
          onClose={closeAgePopup}
        />
      ) : null}

      <Helmet>
        <title>{t[titles[step]]}</title>
      </Helmet>
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
