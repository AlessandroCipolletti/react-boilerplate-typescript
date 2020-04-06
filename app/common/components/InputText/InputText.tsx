import React, { memo } from 'react'
import { debounce } from 'lodash'

import { Input } from './styled'

interface Props {
  type: 'text' | 'email'
  name: string
  placeholder: string
  required?: boolean
  onChange(value?: string): void
}

const InputText = function({ type, name, placeholder, required = true, onChange }: Props) {
  const [value, setValue] = React.useState('')

  const callOnChange = debounce(onChange, 200)

  const handleOnChange = React.useCallback((e) => {
    const v = e.target.value
    setValue(v)
    callOnChange(v)
  }, [setValue])

  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={handleOnChange}
    />
  )
}

export default memo(InputText)
