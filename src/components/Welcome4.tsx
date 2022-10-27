import { NavLink } from "react-router-dom"
import { Icon } from "./Icon"
import { MyLayout } from "./Mylayout"

export const Welcome4 = () => {
  return (
    <MyLayout
      iconSlot={
        <Icon name='chart' className="icon" />
      }
      titleSlot={
        <h2>会挣钱<br />还要会省钱</h2>
      }
      navLinkSlot={
        <>
          <NavLink className="fake" to="/start"></NavLink>
          <NavLink to="/welcome/4"></NavLink>
          <NavLink to="/start">跳过</NavLink>
        </>
      }
    />
  )
}