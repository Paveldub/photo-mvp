import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Pages/Home/Home'
import { Photography } from './Pages/Photography/Photography'
import { About } from './Pages/About/About'
import { ContactUs } from './Pages/Contactus/Contactus'

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
