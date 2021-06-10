import ReactDOM from 'react-dom';
import { App } from './App';

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      blue: string;
    };
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
