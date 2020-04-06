import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FormattedMessage } from 'react-intl'

import messages from './messages'

interface Props {
  action(): any
}

const Page = function (props: Props) {
  console.log(props)

  return (
    <>
      <Helmet>
        <title>Page</title>
        <meta name="description" content="Description of Page" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </>
  )
}

export default Page
