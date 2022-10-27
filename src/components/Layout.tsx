import { Nav } from "./Nav"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  outline: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`

type Props = {
  className?: string
  children: React.ReactElement
}

export const Layout: React.FC<Props> = (props: any) => {

  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  )
}