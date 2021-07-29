import styled from 'styled-components'

export const ContainerWrapper = styled('footer')`
  display: flex;
  box-shadow: 0 2px 15px rgba(0, 44, 84, 0.25);
  width: 100%;
  background-color: #ccc;
  margin-top: auto;
`

export const FooterContainer = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const FooterHalf = styled('div')`
  width: 50%;
  background: #ccc;
  padding: 20px 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
