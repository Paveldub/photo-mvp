import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerWrapper = styled('header')`
  display: flex;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export const HeaderContainer = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  padding: 0 15px;
  align-items: center;
  padding: 15px 15px;

  @media screen and (max-width: 480px) {
    background: #fff;
  }
`

export const HeaderHalfLeft = styled('div')`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const HeaderHalfRight = styled('div')`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
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
  margin-right: 0 auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
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

export const HeaderLanguage = styled('div')`
  display: flex;
  align-items: center;
  margin-left: 20px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Sidebar = styled('div')``

export const HeaderLanguageSpan = styled('span')`
  color: #fff;
  outline: navajowhite;
  text-transform: uppercase;
  cursor: pointer;
`
