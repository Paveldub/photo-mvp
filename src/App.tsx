import { Header, Footer } from './Components'
import { Home, Photography, About, ContactUs } from './Pages'

import {
  GlobalStyle,
  ContentWrapper,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'
import { Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ContentWrapper>
        <Header />
        <PagesWrapper>
          <Route path="/" component={Home} exact />
          <Route path="/photography" component={Photography} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contactus" component={ContactUs} exact />
        </PagesWrapper>
        <Footer />
      </ContentWrapper>
    </>
  )
}
