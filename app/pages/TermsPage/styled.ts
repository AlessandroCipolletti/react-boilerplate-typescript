import styled from 'utils/styled-components'
import Theme from 'common/Theme'

import { PageMessage } from 'common/styled/Page'
import Button from 'common/styled/Button'

export const Message = styled(PageMessage)`
  font-style: normal;
  text-align: left;
  margin-bottom: ${Theme.spacing.size8};
`

export const BackButton = styled(Button)`
  margin-bottom: ${Theme.spacing.size8};
`
