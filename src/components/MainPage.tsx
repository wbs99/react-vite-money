import React, { ReactElement, ReactNode } from "react"
import styled from "styled-components"
import { Navbar } from "./Navbar"


type Props = {
  title: string
  mainSlot: ReactNode
  iconSlot: ReactElement
  onClickMenu?: () => void
}

export const MainPage: React.FC<Props> = (props) => {
  const { mainSlot, title, iconSlot } = props

  return (
    <MainPageWrapper>
      <Navbar
        className="navWrapper"
        title={title}
        iconSlot={iconSlot}
      />
      {mainSlot}
    </MainPageWrapper>
  )
}

const MainPageWrapper = styled.div`
  position:relative;
  background-color:var(--bg);
  .navWrapper{
    position:sticky;
    top:0;
    z-index:var(--z-index-navbar)
  }
`
