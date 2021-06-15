import styled from 'styled-components'

export const Container = styled('div')`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`

export const FooterWrapper = styled('footer')`
  display: flex;
`

export const FooterContentWrapper = styled('div')`
  padding: 20px 0;
`

export const FooterHalf = styled('div')`
  width: 50%;
  background: #ccc;
  padding: 20px 10px;
`

export const SocialIconLink = styled('a')`
  color: red;
  font-size: 24px;
  text-decoration: none;
  margin-right: 20px;

  &::last-child {
    margin-right: 0;
  }
`

export const SocialIconPic = styled('img')`
  max-width: 50px;
  max-height: 50px;
  src: url(${(props) => props.src});
`

export const AllRightsReverved = styled('div')`
  display: flex;
  align-items: center;
`

export const DropMeAline = styled('a')`
  color: red;
  font-size: 24px;
  text-decoration: none;
`
