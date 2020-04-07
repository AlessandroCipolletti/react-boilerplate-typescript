import styled, { css } from 'styled-components'
import Theme from 'common/Theme'

export const ButtonCss = css`
  width: ${Theme.spacing.size10};
  height: ${Theme.spacing.size7};
  background-color: ${Theme.palette.primary(1)};
  color: ${Theme.palette.gray(8)};
  cursor: pointer;
  border: none;
  font-size: ${Theme.fontSizing.size5};
`

const Button = styled.button`
  ${ButtonCss};
`

export default Button
