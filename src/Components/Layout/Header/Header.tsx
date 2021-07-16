import logo from '../../../assets/images/logo.svg'
import { LANGUAGES } from '../../../Constants/languages'
import { useChangeLanguage } from '../../../Hooks/useLanguageHook'
import { useTranslate } from '../../../Hooks/useTranslate'
import {
  ContainerWrapper,
  HeaderContainer,
  HeaderHalf,
  HeaderLanguage,
  HeaderLanguageSpan,
  HeaderLink,
  HeaderLogo,
  HeaderLogoText,
  HeaderLogoWrapper,
  HeaderNav,
} from './Header.styles'

const WORDS = ['portfolioText', 'aboutText', 'contactUsText']

export const Header = () => {
  const { onSetLanguage } = useChangeLanguage()
  const t = useTranslate(WORDS)

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
              <HeaderLink to="/portfolio">{t.portfolioText}</HeaderLink>
              <HeaderLink to="/about">{t.aboutText}</HeaderLink>
              <HeaderLink to="/contactus">{t.contactUsText}</HeaderLink>
            </HeaderNav>
          </HeaderHalf>
          <HeaderLanguage>
            {LANGUAGES.map((item) => (
              <HeaderLanguageSpan
                key={item.id}
                onClick={() => onSetLanguage(item)}
                onKeyDown={() => onSetLanguage(item)}
                role="button"
                tabIndex="0"
              >
                {item.value}
              </HeaderLanguageSpan>
            ))}
          </HeaderLanguage>
        </HeaderContainer>
      </ContainerWrapper>
    </>
  )
}
