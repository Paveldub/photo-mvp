import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Container = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

export const HeaderWrapper = styled('header')`
  display: flex;
`

export const HeaderHalf = styled('div')`
  width: 50%;
  background: #ccc;
`

export const HeaderLogoWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const HeaderLogo = styled('img')`
  src: url(${(props) => props.src});
  cursor: pointer;
`

export const HeaderLogoText = styled('span')`
  color: red;
  text-decoration: underline;
`

export const HeaderNav = styled('nav')`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const HeaderList = styled('ul')`
  color: red;
`

export const HeaderLink = styled(Link)`
  color: red;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`
