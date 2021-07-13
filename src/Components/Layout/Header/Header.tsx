import logo from '../../../assets/images/logo.svg'
import { LANGUAGES } from '../../../Constants/index'
import { useChangeLanguage } from '../../../Hooks/useLanguageHook'
import {
  ContainerWrapper,
  HeaderContainer,
  HeaderHalf,
  HeaderLink,
  HeaderLogo,
  HeaderLogoText,
  HeaderLogoWrapper,
  HeaderNav,
} from './Header.styles'

export const Header = () => {
  const { onSetLanguage } = useChangeLanguage()

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
              <HeaderLink to="/portfolio">Portfolio</HeaderLink>
              <HeaderLink to="/about">About</HeaderLink>
              <HeaderLink to="/contactus">Contact us</HeaderLink>
            </HeaderNav>
          </HeaderHalf>
          <div className="header__content-lang">
            {LANGUAGES.map((item) => (
              <span
                key={item.id}
                onClick={() => onSetLanguage(item)}
                onKeyDown={() => onSetLanguage(item)}
                role="button"
                tabIndex="0"
              >
                {item.value}
              </span>
            ))}
          </div>
        </HeaderContainer>
      </ContainerWrapper>
    </>
  )
}
