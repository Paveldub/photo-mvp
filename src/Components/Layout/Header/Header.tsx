import classnames from 'classnames'
import { useState } from 'react'
import { Icon } from '../..'
import logo from '../../../assets/images/logo.png'
import { LANGUAGES } from '../../../Constants/languages'
import { SOCIAL_NETWORK_LINKS } from '../../../Constants/socials'
import { useChangeLanguage } from '../../../Hooks/useLanguageHook'
import { useTranslate } from '../../../Hooks/useTranslate'
import { SocialIconLink } from '../Footer/Footer.styles'
import { Sidebar } from '../Sidebar/index'
import {
  ContainerWrapper,
  HeaderContainer,
  HeaderContainerWrapper,
  HeaderHalfLeft,
  HeaderHalfRight,
  HeaderLanguage,
  HeaderLanguageSpan,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  HeaderSocials,
} from './Header.styles'
import './styles.scss'
const WORDS = ['galleryText', 'aboutText', 'contactUsText', 'homePageText']

export const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const toggleSideBar = () => setIsSideBarOpen((prevState) => !prevState)

  const { onSetLanguage } = useChangeLanguage()
  const t = useTranslate(WORDS)

  return (
    <>
      <ContainerWrapper>
        <HeaderContainer>
          <HeaderLogo>
            <img src={logo} alt="logo" />
            <HeaderSocials>
              {SOCIAL_NETWORK_LINKS.map((item) => (
                <SocialIconLink
                  key={item.icon}
                  href={item.href}
                  target="_blank"
                >
                  <Icon icon={item.icon} size="25px" />
                </SocialIconLink>
              ))}
            </HeaderSocials>
          </HeaderLogo>
          <HeaderContainerWrapper>
            <HeaderHalfLeft>
              <HeaderNav>
                <HeaderLink to="/">{t.homePageText}</HeaderLink>
                <HeaderLink to="/gallery">{t.galleryText}</HeaderLink>
                <HeaderLink to="/about">{t.aboutText}</HeaderLink>
                <HeaderLink to="/contact">{t.contactUsText}</HeaderLink>
              </HeaderNav>
            </HeaderHalfLeft>
            <HeaderHalfRight>
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
            </HeaderHalfRight>
          </HeaderContainerWrapper>

          <div
            className={classnames('menu-btn', { open: isSideBarOpen })}
            onClick={toggleSideBar}
            onKeyDown={toggleSideBar}
            role="button"
            tabIndex="0"
          >
            <div className="menu-btn__burger" />
          </div>
        </HeaderContainer>
        <Sidebar
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
      </ContainerWrapper>
    </>
  )
}
