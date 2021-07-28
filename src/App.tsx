import { useState } from 'react'
import { Route } from 'react-router-dom'
import { Footer, Header } from './Components'
import { AgeConfirmationPopup } from './Components/Layout/AgeConfirmationPopup/index'
import {
  ContentWrapper,
  GlobalStyles,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'
import { About, ContactUs, Gallery, Home } from './Pages'

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
          <Route path="/" component={Home} exact />
          <Route path="/gallery" component={Gallery} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contactus" component={ContactUs} exact />
        </PagesWrapper>
        <Footer />
      </ContentWrapper>
    </>
  )
}
