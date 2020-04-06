import * as React from 'react'

import styled from 'utils/styled-components'

import ToggleOption from './components/ToggleOption'

function Toggle(props) {
  let content = <option>--</option>

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value: string) => (
      <ToggleOption key={value} value={value} message={props.messages[value]} />
    ))
  }

  return (
    <Select value={props.value} onChange={props.onToggle}>
      {content}
    </Select>
  )
}

export default Toggle

const Select = styled.select`
  line-height: 1em;
  background-color: transparent;
  border-style: none;
`
