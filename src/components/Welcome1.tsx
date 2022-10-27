import { NavLink } from "react-router-dom"
import { Icon } from "./Icon"
import { MyLayout } from "./Mylayout"


export const Welcome1: React.FC = () => {
  return (
    <MyLayout
      iconSlot={
        <Icon name='pig' className="icon" />
      }
      titleSlot={<h2>会挣钱<br />还要会省钱</h2>}
      navLinkSlot={
        <>
          <NavLink className="fake" to="/start"></NavLink>
          <NavLink to="/welcome/2">下一页</NavLink>
          <NavLink to="/start">跳过</NavLink>
        </>
      }
    />
  )
}