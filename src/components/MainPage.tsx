import { ReactElement } from "react"
import { Icon } from "./Icon"
import { Navbar } from "./Navbar"


type Props = {
  title: string
  mainSlot: any
  iconSlot: ReactElement
  onClickMenu?: () => void
}

export const MainPage: React.FC<Props> = (props) => {
  const { mainSlot, title, iconSlot } = props

  return (
    <div>
      <Navbar title={title} iconSlot={iconSlot} />
      {mainSlot}
    </div>
  )
}
