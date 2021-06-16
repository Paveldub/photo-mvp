import logo from '../../assets/images/logo.svg'

import {
  HeaderHalf,
  HeaderLogo,
  HeaderNav,
  HeaderLink,
  HeaderLogoText,
  HeaderLogoWrapper,
  ContainerWrapper,
  HeaderContainer,
} from './Header.styles'

export const Header = () => {
  return (
    <>
      <ContainerWrapper>
        <HeaderContainer>
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
        </HeaderContainer>
      </ContainerWrapper>
    </>
  )
}
