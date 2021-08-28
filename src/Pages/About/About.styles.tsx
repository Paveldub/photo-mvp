import styled from 'styled-components'

export const Container = styled('div')`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (max-width: 480px) {
    padding: 0 8px;
  }
`
