import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Pages/Home/Home'
import { GlobalStyle, ContentWrapper } from './globalStyles/GlobalStyles.styles'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ContentWrapper>
        <Header />
        <Home />
        <Footer />
      </ContentWrapper>
    </>
  )
}
