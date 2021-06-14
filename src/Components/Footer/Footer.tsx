import {
  Container,
  FooterHalf,
  FooterWrapper,
  SocialIconLink,
  AllRightsReverved,
  DropMeAline,
  SocialIconPic,
} from './Footer.styles'

import instagramPic from '../../images/free-icon-instagram-2111463.svg'
import telegramPic from '../../images/free-icon-telegram-906377.svg'

const Footer = () => {
  return (
    <>
      <Container>
        <FooterWrapper>
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
        </FooterWrapper>
      </Container>
    </>
  )
}

export default Footer
