import styled from 'utils/styled-components'
import Theme from 'common/Theme'

export const PageSubtitle = styled.h2`
  font-size: ${Theme.fontSizing.size6};
  color: ${Theme.palette.gray(4)};
  font-style: italic;
  text-align: center;
  font-weight: 300;
  margin-bottom: ${Theme.spacing.size7};
  letter-spacing: 1px;
`

export const PageMessage = styled.p`
  font-size: ${Theme.fontSizing.size4};
  color: ${Theme.palette.gray(8)};
  text-align: center;
  font-family: sans-serif;
  font-weight: lighter;
`
