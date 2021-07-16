import { useTranslate } from '../../../Hooks/useTranslate'
import { Icon } from '../../Common/Icon/index'
import {
  AllRightsReverved,
  ContainerWrapper,
  DropMeAline,
  FooterContainer,
  FooterHalf,
  SocialIconLink,
} from './Footer.styles'

const WORDS = ['allRightReserverText', 'socialsText']

export const Footer = () => {
  const t = useTranslate(WORDS)

  return (
    <>
      <ContainerWrapper>
        <FooterContainer>
          <FooterHalf>
            <div>{t.socialsText}</div>
            <SocialIconLink
              href="//www.instagram.com/demidovich.fiml/"
              target="_blank"
            >
              <Icon icon="instagram" size="25px" />
            </SocialIconLink>

            <SocialIconLink href="//t.me/paveldubs" target="_blank">
              <Icon icon="telegram" size="25px" />
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
              (C) {new Date().getFullYear()} {t.allRightReserverText}
            </AllRightsReverved>
          </FooterHalf>
        </FooterContainer>
      </ContainerWrapper>
    </>
  )
}
