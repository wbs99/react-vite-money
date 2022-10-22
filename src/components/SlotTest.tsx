import React, { ReactElement } from "react"

type Props = {
  slotA: ReactElement
  slotB: ReactElement
}

export const SlotTest: React.FC<Props> = (props) => {
  const { slotA, slotB } = props
  return (
    <div>
      {slotA}
      <br />
      {slotB}
    </div>
  )
}