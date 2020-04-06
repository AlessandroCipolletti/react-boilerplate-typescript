import styled from 'utils/styled-components'
import Theme from 'common/Theme'


export const Input = styled.input`
  width: ${Theme.spacing.size16};
  height: ${Theme.spacing.size7};
  padding: ${Theme.spacing.size2};
  border: solid 2px ${Theme.palette.primary(1)};
  margin: ${Theme.spacing.size2};

  &:focus {
    outline-width: 0;
  }
  &:valid {
    border-color: ${Theme.palette.green(3)};
  }
  &:invalid:not(:placeholder-shown):not(:focus) {
    border-color: ${Theme.palette.red(2)};
  }
`
