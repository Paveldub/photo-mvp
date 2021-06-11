import { Button, Title, Background } from './Components/Button/Button'
import { Counter } from './Components/Counter/Counter'

import { Header } from './Components/Header/Header'

import { GlobalStyle } from './globalStyles/GlobalStyles.styles'

import logo from './images/pic.jpg'
import logoPic from './images/logo.svg'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Background>
        <Title>
          React TypeScript Webpack Starter Template - {process.env.NODE_ENV} -
          {process.env.name} TEST TESTTEST TESTTEST TESTTEST TEST
        </Title>
        <Button>changed text 111</Button>
        <div>
          <img src={logo} alt="" width="150px" height="150px" />
          <img src={logoPic} alt="" />
        </div>
      </Background>
      <Counter />
    </>
  )
}
