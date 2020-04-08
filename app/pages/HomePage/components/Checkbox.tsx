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
  transform: scale3d(1.5, 1.5, 1);
  margin: 10px 15px 10px 0px;
  vertical-align: bottom;
  cursor: pointer;
`
