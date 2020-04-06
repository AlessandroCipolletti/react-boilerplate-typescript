import styled from 'utils/styled-components'
import Theme from 'common/Theme'

import bgImg from 'medias/images/bg.png'

export const Wrapper = styled.div`
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  top: 0px;
  left: 0px;
  padding: ${Theme.spacing.size4};
  margin: 0px;
  background-image: url(${bgImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Logo = styled.img`
  position: relative;
  top: 0px;
  left: 0px;
  width: ${Theme.spacing.size14};
`

export const Title = styled.h1`
  font-size: ${Theme.fontSizing.size8};
  text-align: center;
  margin-top: ${Theme.spacing.size7};
  color: ${Theme.palette.gray(8)};
  letter-spacing: 1.5px;
`

export const Content = styled.div`
  width: ${Theme.spacing.size19};
  max-width: 100%;
  margin: auto;
  text-align: center;
`
