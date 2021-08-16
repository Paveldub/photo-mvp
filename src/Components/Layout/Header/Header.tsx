import classnames from 'classnames'
import { useState } from 'react'
import { LANGUAGES } from '../../../Constants/languages'
import { useChangeLanguage } from '../../../Hooks/useLanguageHook'
import { useTranslate } from '../../../Hooks/useTranslate'
import { Sidebar } from '../Sidebar/index'
import {
  ContainerWrapper,
  HeaderContainer,
  HeaderHalfLeft,
  HeaderHalfRight,
  HeaderLanguage,
  HeaderLanguageSpan,
  HeaderLink,
  HeaderNav,
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
