import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Icon } from "./Icon";

const NavWrapper = styled.nav`
  line-height: 22px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.33333%;
      text-align: center;
      > a {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        > .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: #e73d32;
          .icon {
            fill: #e73d32;
          }
        }
      }
    }
  }
`

const Nav = () => {
  let activeClassName = "selected";
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/welcome/1"
            className={({ isActive }) => isActive ? activeClassName : undefined}>
            <Icon name="chart" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/welcome/2"
            className={({ isActive }) => isActive ? activeClassName : undefined}
          >
            <Icon name="clock" />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/welcome/3"
            className={({ isActive }) => isActive ? activeClassName : undefined}
          >
            <Icon name="cloud" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
