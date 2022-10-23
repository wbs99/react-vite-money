import { NavLink } from "react-router-dom"
import { Icon } from "./Icon"
import { MyLayout } from "./Mylayout"

export const Welcome3 = () => {
  return (
    <MyLayout iconSlot={iconSlot()} titleSlot={titleSlot()} navLinkSlot={navLinkSlot()}></MyLayout>

  )
}



const iconSlot = () => {
  return (
    <Icon name='clock' className="icon" />
  )
}

const titleSlot = () => {
  return (
    <h2>会挣钱<br />还要会省钱</h2>
  )
}

const navLinkSlot = () => {
  return (
    <>
      <NavLink className="fake" to="/start"></NavLink>
      <NavLink to="/welcome/4">下一页</NavLink>
      <NavLink to="/start">跳过</NavLink>
    </>
  )
}