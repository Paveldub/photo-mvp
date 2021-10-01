import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainerWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const HeaderSocials = styled('div')`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    display: none;
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
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 16px;
  transition: opacity 0.25s ease-in-out;

  &:hover {
    transition: opacity 0.25s ease-in-out;
    opacity: 0.7;
  }

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

export const HeaderLanguageSpan = styled('span')`
  color: #fff;
  outline: navajowhite;
  text-transform: uppercase;
  cursor: pointer;
`
