import styled from '@emotion/styled'

export const Container = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

export const FooterWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

export const FooterHalf = styled('div')`
  width: 50%;
  background: #ccc;
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
