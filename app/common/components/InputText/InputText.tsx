import React, { memo } from 'react'
import { debounce } from 'lodash'

import { Input } from './styled'

interface Props {
  type: 'text' | 'email'
  name: string
  placeholder: string
  onChange(value?: string): void
  required?: boolean
  initialValue?: string
}

const InputText = function({ type, name, placeholder, onChange, required = true, initialValue = '' }: Props) {
  const [currentValue, setCurrentValue] = React.useState(initialValue)

  const callOnChange = debounce(onChange, 300)
  const handleOnChange = React.useCallback((e) => {
    const v = e.target.value
    setCurrentValue(v)
    callOnChange(v)
  }, [setCurrentValue])

  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={currentValue}
      onChange={handleOnChange}
    />
  )
}

export default memo(InputText)
