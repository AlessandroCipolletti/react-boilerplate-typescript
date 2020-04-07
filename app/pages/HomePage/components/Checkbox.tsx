import React from 'react'

import styled from 'utils/styled-components'

interface Props {
  onChange(e: object): void
}

function Checkbox({ onChange }: Props) {
  return (
    <Input type="checkbox" onChange={onChange} />
  )
}

export default Checkbox

const Input = styled.input`
  margin: 10px;
  vertical-align: bottom;
  cursor: pointer;
`
