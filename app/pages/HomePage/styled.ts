import styled from 'utils/styled-components'
import Theme from 'common/Theme'

export const PageMessage = styled.p`
  font-size: ${Theme.fontSizing.size4};
  color: ${Theme.palette.gray(8)};
  font-style: italic;
  text-align: center;
  font-family: sans-serif;
  font-weight: lighter;
`

export const Form = styled.form`
  margin-bottom: ${Theme.spacing.size8};
`
