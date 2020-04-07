import styled from 'utils/styled-components'
import Theme from 'common/Theme'

export const Wrapper = styled.div`
  width: 100%;
  height: ${Theme.spacing.size8};
  text-align: center;
  margin-top: ${Theme.spacing.size8};
`

export const Line1 = styled.span`
  font-size: ${Theme.fontSizing.size8};
  line-height: ${Theme.spacing.size8};
  color: ${Theme.palette.gray(8)};
  font-weight: lighter;
  letter-spacing: 1.5px;
`

export const Line2 = styled.span`
  font-size: ${Theme.fontSizing.size5};
  line-height: ${Theme.spacing.size5};
  color: ${Theme.palette.gray(8)};
  font-weight: lighter;
  letter-spacing: 1.5px;
`

export const Img = styled.img`
  width: ${Theme.spacing.size9};
`
