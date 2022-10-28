import { useState } from "react"
import { Icon } from "./Icon"
import { Overlay } from "./Overlay"

type Props = {
}

export const IconOverlay: React.FC<Props> = () => {

  const [overlay, setOverlay] = useState(false)
  const clickMenu = () => { setOverlay(!overlay) }
  return (
    <>
      <Icon name='menu' onClick={clickMenu} />
      {overlay && <Overlay onClickMenu={clickMenu} />}
    </>
  )
}