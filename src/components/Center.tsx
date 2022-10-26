import { ReactElement } from "react"
import styled from "styled-components"

interface Props {
  slotA: ReactElement
  className: string
}

export const Center: React.FC<Props> = (props) => {
  const { slotA, ...rest } = props

  return (
    <CenterWrapper {...rest}>{slotA}</CenterWrapper>
  )
}


const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &.horizontal {
    flex-direction: row;
  }
  &.vertical {
    flex-direction: column;
  }
  
`