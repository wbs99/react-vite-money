import React, { FormEvent } from "react"

type Props = {
  options: { value: string, text: string }[]
}

export const Select: React.FC<Props> = ({ options }) => {
  const onChange = (e: any) => { console.log(e.target.value) }
  return (
    <select onChange={onChange} className='formItem select'>
      {options.map(option =>
        <option value={option.value} key={option.value}>{option.text}</option>
      )}
    </select>
  )
}