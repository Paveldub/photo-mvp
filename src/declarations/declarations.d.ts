import 'styled-components'

declare module '*.jpg'
declare module '*.png'
declare module '*.svg'
declare module '*.woff'
declare module '*.woff2'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string

      background: string
      text: string
    }
  }
}
