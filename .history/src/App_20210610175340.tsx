import "@emotion/react";

import { Button, Title } from './Components/Button/Button';
import logo from './assets/images/pic.jpg';

export const App = () => {
  return (
    <>
      <Title>React TypeScript Webpack Starter Template</Title>
      <Button>text</Button>
      <div>
        <img src={logo} alt="" width="100px" height="100px" />
      </div>
    </>
  )
}
