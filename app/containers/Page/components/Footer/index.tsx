import * as React from 'react'

import styled from 'utils/styled-components'

import LocaleToggle from '../LocaleToggle'

function Footer() {
  return (
    <Wrapper>
      <section>
        <LocaleToggle />
      </section>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  border-top: 1px solid #666;
`
