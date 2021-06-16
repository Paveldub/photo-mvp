import { ThemeProvider } from 'styled-components'
import { Route } from 'react-router-dom'

import {
  Header,
  Footer,
  Toggle,
  useDarkMode,
  lightTheme,
  darkTheme,
} from './Components'
import { Home, Photography, About, ContactUs } from './Pages'

import {
  GlobalStyles,
  ContentWrapper,
  PagesWrapper,
} from './globalStyles/GlobalStyles.styles'

export const App = () => {
  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />

        <ContentWrapper>
          <Header />
          <Toggle toggleTheme={themeToggler} />
          <PagesWrapper>
            <Route path="/" component={Home} exact />
            <Route path="/photography" component={Photography} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contactus" component={ContactUs} exact />
          </PagesWrapper>
          <Footer />
        </ContentWrapper>
      </ThemeProvider>
    </>
  )
}
