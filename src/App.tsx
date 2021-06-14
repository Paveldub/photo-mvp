// import { useState } from 'react'
import { Route } from 'react-router-dom'
// import { ThemeProvider } from '@emotion/react'

import { Header, Footer } from './Components'
import { Home, Photography, About, ContactUs } from './Pages'
// import { lightTheme, darkTheme } from './Components/DarkModeStyles/Themes'

import {
  GlobalStyle,
  ContentWrapper,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'

export const App = () => {
  // const [theme, setTheme] = useState('light')

  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }

  return (
    <>
      {/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
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
      {/* </ThemeProvider> */}
    </>
  )
}
