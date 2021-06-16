import {
  FooterHalf,
  ContainerWrapper,
  FooterContainer,
  SocialIconLink,
  AllRightsReverved,
  DropMeAline,
  SocialIconPic,
} from './Footer.styles'

import instagramPic from '../../assets/images/free-icon-instagram-2111463.svg'
import telegramPic from '../../assets/images/free-icon-telegram-906377.svg'

export const Footer = () => {
  return (
    <>
      <ContainerWrapper>
        <FooterContainer>
          <FooterHalf>
            <SocialIconLink
              href="//www.instagram.com/demidovich.fiml/"
              target="_blank"
            >
              <SocialIconPic src={instagramPic} />
            </SocialIconLink>

            <SocialIconLink href="//t.me/paveldubs" target="_blank">
              <SocialIconPic src={telegramPic} />
            </SocialIconLink>
          </FooterHalf>

          <FooterHalf>
            <DropMeAline
              href="mailto: demidovich.fiml@gmail.com"
              target="_blank"
            >
              demidovich.fiml@gmail.com
            </DropMeAline>
            <AllRightsReverved>
              (C) {new Date().getFullYear()} All right reserved
            </AllRightsReverved>
          </FooterHalf>
        </FooterContainer>
      </ContainerWrapper>
    </>
  )
}
