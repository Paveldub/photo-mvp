import { useState } from 'react'
import { Route } from 'react-router-dom'
import { Footer, Header } from './Components'
import { AgeConfirmationPopup } from './Components/Layout/AgeConfirmationPopup/index'
import {
  ABOUT_PATH,
  CONTACTS_PATH,
  GALLERY_PATH,
  HOME_PATH,
} from './Constants/paths'
import {
  ContentWrapper,
  GlobalStyles,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'
import { About, ContactUs, Gallery, Home } from './Pages'

export {
  ABOUT_PATH,
  CONTACTS_PATH,
  GALLERY_PATH,
  HOME_PATH,
} from './Constants/paths'

export const App = () => {
  const [isAgeConfirmation, setIsAgeConfirmation] = useState(true)
  const isLocalStorage = localStorage.getItem('ageConfirmation') === null

  const closeAgePopup = () => {
    setIsAgeConfirmation(!isAgeConfirmation)
    localStorage.setItem('ageConfirmation', 'CONFIRMED')
  }

  return (
    <>
      <GlobalStyles />

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
