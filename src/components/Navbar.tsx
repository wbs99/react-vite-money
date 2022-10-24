import { ReactElement } from "react"
import styled from "styled-components"

type Props = {
  title: string
  iconSlot: ReactElement
}

export const Navbar: React.FC<Props> = (props) => {
  const { title, iconSlot } = props

  return (
    <NavbarWrapper >
      <span className="icon_wrapper">{iconSlot}</span>
      <span className="title_wrapper">{title}</span>

    </NavbarWrapper>
  )
}


const NavbarWrapper = styled.div`
  background: linear-gradient(to bottom, var(--navbar-bg-start), var(--navbar-bg-end));
  color: var(--navbar-text);
  fill: var(--navbar-text);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 16px 12px;
.title_wrapper{
  font-size: 24px;
  margin-left: 12px;
}
.icon_wrapper{
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    max-width: 100%;
    max-height: 100%;
  }
}
  
`