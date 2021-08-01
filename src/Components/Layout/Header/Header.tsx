import classnames from 'classnames'
import { useState } from 'react'
import { LANGUAGES } from '../../../Constants/languages'
import { useChangeLanguage } from '../../../Hooks/useLanguageHook'
import { useTranslate } from '../../../Hooks/useTranslate'
import { Icon } from '../../Common/Icon'
import { Sidebar } from '../Sidebar/index'
import {
  ContainerWrapper,
  HeaderContainer,
  HeaderHalf,
  HeaderLanguage,
  HeaderLanguageSpan,
  HeaderLink,
  HeaderLogoText,
  HeaderLogoWrapper,
  HeaderNav,
} from './Header.styles'
import './styles.scss'
const WORDS = ['galleryText', 'aboutText', 'contactUsText']

export const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const toggleSideBar = () => setIsSideBarOpen((prevState) => !prevState)

  const { onSetLanguage } = useChangeLanguage()
  const t = useTranslate(WORDS)

  return (
    <>
      <ContainerWrapper>
        <HeaderContainer>
          <HeaderHalf>
            <HeaderLink to="/">
              <HeaderLogoWrapper>
                <Icon icon="logo" size="25px" />
                <HeaderLogoText>Film enthusiast</HeaderLogoText>
              </HeaderLogoWrapper>
            </HeaderLink>
          </HeaderHalf>
          <HeaderHalf>
            <HeaderNav>
              <HeaderLink to="/gallery">{t.galleryText}</HeaderLink>
              <HeaderLink to="/about">{t.aboutText}</HeaderLink>
              <HeaderLink to="/contact">{t.contactUsText}</HeaderLink>
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
