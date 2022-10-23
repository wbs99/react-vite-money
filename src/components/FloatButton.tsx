import styled from "styled-components"
import { Icon } from "./Icon"


const FloatButtonWrapper = styled.div`
  background: var(--float-button-bg);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  .icon {
    width: 24px;
    height: 24px;
    fill: var(--float-button-text);
  }
`

type Props = {
}

export const FloatButton: React.FC<Props> = () => {
  return (
    <FloatButtonWrapper>
      <Icon name='add' />
    </FloatButtonWrapper>
  )
}