import { defineMessages } from 'react-intl'

export const scope = 'app.HomePage'

export default defineMessages({
  pageSubtitle: {
    id: `${scope}.page_subtitle`,
    defaultMessage: 'This test will assert that your experience using Pitchy will be optimal',
  },
  initialInstractions: {
    id: `${scope}.initial_instractions`,
    defaultMessage: 'To start the test please enter your informations below and press “start”',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  surname: {
    id: `${scope}.surname`,
    defaultMessage: 'Surname',
  },
})
