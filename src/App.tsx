import { Route } from 'react-router-dom'
import { Footer, Header } from './Components'
import {
  ContentWrapper,
  GlobalStyles,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'
import { About, ContactUs, Gallery, Home } from './Pages'

export const App = () => {
  return (
    <>
      <GlobalStyles />

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
