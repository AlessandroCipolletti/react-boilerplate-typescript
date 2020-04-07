import { defineMessages } from 'react-intl'

export const scope = 'app.HomePage'

export default defineMessages({
  pageSubtitle: {
    id: `${scope}.page_subtitle`,
    defaultMessage: 'This test will assert that your experience using Pitchy will be optimal',
  },
  initialInstractions: {
    id: `${scope}.initial_instractions`,
    defaultMessage: 'To start the test please enter your contact informations below and press “start”',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  firstname: {
    id: `${scope}.firstname`,
    defaultMessage: 'Name',
  },
  lastname: {
    id: `${scope}.lastname`,
    defaultMessage: 'Lastname',
  },
  start: {
    id: `${scope}.start`,
    defaultMessage: 'Start',
  },
  accept: {
    id: `${scope}.accept`,
    defaultMessage: 'I agree to',
  },
  terms: {
    id: `${scope}.terms`,
    defaultMessage: 'terms and conditions',
  },
})
