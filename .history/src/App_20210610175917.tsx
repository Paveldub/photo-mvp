import "@emotion/react";

import { Button, Title, Background } from './Components/Button/Button';
import logo from './assets/images/pic.jpg';
import logoPic from './assets/images/logo.svg';

export const App = () => {
  const handleSubmit = () => {
    alert('test');
  }

  return (
    <>
      <Background>
        <Title>React TypeScript Webpack Starter Template</Title>
        <Button onClick={handleSubmit}>text</Button>
        <div>
          <img src={logo} alt="" width="150px" height="150px" />
          <img src={logoPic} alt="" />
        </div>
      </Background>
    </>
  )
}
