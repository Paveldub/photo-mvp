import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
`

export const ContentWrapper = styled('div')`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const PagesWrapper = styled('div')`
  padding: 0;
`
