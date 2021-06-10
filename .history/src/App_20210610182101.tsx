import "@emotion/react";

import { Button, Title, Background } from './Components/Button/Button';
import logo from './assets/images/pic.jpg';
import logoPic from './assets/images/logo.svg';

export const App = () => {

  return (
    <>
      <Background>
        <Title>React TypeScript Webpack Starter Template - {process.env.NODE_ENV}</Title>
        <Button>text</Button>
        <div>
          <img src={logo} alt="" width="150px" height="150px" />
          <img src={logoPic} alt="" />
        </div>
      </Background>
    </>
  )
}
