import * as styledComponents from 'styled-components'

// your theme variables
export interface IThemeInterface {
  palette: object
  gradients: object
  spacing: object
  fontSizing: object
  UIColors: object
  timing: object
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
