import { useState } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

import { Header, Footer } from './Components'
import { Home, Photography, About, ContactUs } from './Pages'
import { lightTheme, darkTheme } from './Components/Themes/Themes'

import {
  GlobalStyle,
  ContentWrapper,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'

const StyledApp = styled('div')`
  color: ${(props) => props.theme.fontColor};
`

export const App = () => {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <StyledApp>
          <button onClick={() => themeToggler()}>Change Theme</button>
        </StyledApp>
      </ThemeProvider>

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
