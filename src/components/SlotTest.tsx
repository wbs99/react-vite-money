import React, { ReactElement } from "react"

type Props = {
  title: string
  slotA: ReactElement
  slotB: ReactElement
}

export const SlotTest: React.FC<Props> = (props) => {
  const { title, slotA, slotB } = props
  return (
    <div>
      {title}
      <br />
      {slotA}
      <br />
      {slotB}
    </div>
  )
}