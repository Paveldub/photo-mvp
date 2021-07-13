import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerWrapper = styled('header')`
  display: flex;
  box-shadow: 0 2px 15px rgba(0, 44, 84, 0.25);
  width: 100%;
  background-color: #ccc;
  z-index: 10;
`

export const HeaderContainer = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  padding: 0 15px;
`

export const HeaderHalf = styled('div')`
  width: 50%;
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
