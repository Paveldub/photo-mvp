import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      blue: string;
    };
  }
}


export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
    </>
  )
}
