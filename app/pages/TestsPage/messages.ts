import { defineMessages } from 'react-intl'

export const scope = 'app.TestsPage'

export default defineMessages({
  pageSubtitle: {
    id: `${scope}.page_subtitle`,
    defaultMessage: 'Your test is in progress',
  },
  environmentLabel: {
    id: `${scope}.environment_label`,
    defaultMessage: 'Environment performances',
  },
  NetworkSecurityLabel: {
    id: `${scope}.network_security_label`,
    defaultMessage: 'Network security',
  },
  bandwidthLabel: {
    id: `${scope}.bandwidth_label`,
    defaultMessage: 'Connection speed',
  },
  html5SupportLabel: {
    id: `${scope}.html5_support_label`,
    defaultMessage: 'HTML5 support',
  },
  loading: {
    id: `${scope}.loading`,
    defaultMessage: 'Loading...',
  },
  done: {
    id: `${scope}.done`,
    defaultMessage: 'Done',
  },
  thankYouLine1: {
    id: `${scope}.thankyou_line_1`,
    defaultMessage: 'Test is finished you can safely close this page',
  },
  thankYouLine2: {
    id: `${scope}.thankyou_line_2`,
    defaultMessage: 'Our CSM teams will contact you if any action is required on your side',
  },
})
