import logo from '../../images/logo.svg'

import {
  Container,
  HeaderWrapper,
  HeaderHalf,
  HeaderLogo,
  HeaderNav,
  HeaderLink,
  HeaderLogoText,
  HeaderLogoWrapper,
} from './Header.styles'

const Header = () => {
  return (
    <>
      <Container>
        <HeaderWrapper>
          <HeaderHalf>
            <HeaderLink to="/">
              <HeaderLogoWrapper>
                <HeaderLogo src={logo} />
                <HeaderLogoText>Film enthusiast</HeaderLogoText>
              </HeaderLogoWrapper>
            </HeaderLink>
          </HeaderHalf>
          <HeaderHalf>
            <HeaderNav>
              <HeaderLink to="/photography">Photography</HeaderLink>
              <HeaderLink to="/about">About</HeaderLink>
              <HeaderLink to="/contactus">Contact us</HeaderLink>
            </HeaderNav>
          </HeaderHalf>
        </HeaderWrapper>
      </Container>
    </>
  )
}

export default Header
