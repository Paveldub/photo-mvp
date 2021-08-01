import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { Footer, Header } from './Components'
import { AgeConfirmationPopup } from './Components/Layout/AgeConfirmationPopup/index'
import {
  ABOUT_PATH,
  CONTACTS_PATH,
  GALLERY_PATH,
  HOME_PATH,
} from './Constants/paths'
import firebase from './firebase'
import {
  ContentWrapper,
  GlobalStyles,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'
import { About, ContactUs, Gallery, Home } from './Pages'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { STEPS } from './Constants/steps'
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

  useEffect(() => {
    const msg = firebase.messaging()

    msg.requestPermission().then(() => {
      return msg.getToken()
    })
    // .then((data) => console.log('token', data))
  })

  return (
    <>
      <GlobalStyles />

      <Helmet>
        <Helmet>
          <title>{t[titles[step]]}</title>
        </Helmet>
      </Helmet>

      {isAgeConfirmation && isLocalStorage ? (
        <AgeConfirmationPopup
          isOpen={isAgeConfirmation}
          onClose={closeAgePopup}
        />
      ) : null}

      <ContentWrapper>
        <Header />
        <PagesWrapper>
          <Route path={HOME_PATH} component={Home} exact />
          <Route path={GALLERY_PATH} component={Gallery} exact />
          <Route path={ABOUT_PATH} component={About} exact />
          <Route path={CONTACTS_PATH} component={ContactUs} exact />
        </PagesWrapper>
        <Footer />
      </ContentWrapper>
    </>
  )
}
