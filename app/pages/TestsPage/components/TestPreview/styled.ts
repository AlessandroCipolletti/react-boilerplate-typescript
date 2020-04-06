import styled from 'utils/styled-components'
import Theme from 'common/Theme'

export const Wrapper = styled.div`
  width: 100%;
  height: ${Theme.spacing.size8};
  text-align: left;
  margin: ${Theme.spacing.size6} 0px;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
`

export const Label = styled.span`
  font-size: ${Theme.fontSizing.size8};
  line-height: ${Theme.spacing.size8};
  color: ${Theme.palette.gray(8)};
  font-weight: lighter;
  letter-spacing: 1.5px;
  flex-shrink: 0;
`

export const Dotted = styled.div`
  &:after {
    line-height: 80px;
    overflow: hidden;
    padding: ${Theme.spacing.size2};
    color: ${Theme.palette.gray(8)};
    letter-spacing: ${Theme.spacing.size2};
    content: ".................................................................."
  }
`

export const IconContainer = styled.div`
  width: ${Theme.spacing.size8};
  height: 100%;
  flex-shrink: 0;
  margin-left: ${Theme.spacing.size2};
`
