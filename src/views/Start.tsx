import styled from "styled-components"
import { Button } from "../components/Button"
import { FloatButton } from "../components/FloatButton"

export const Start = () => {
  const onClick = () => { console.log('你好啊') }

  return (
    <StartPageWrapper>
      <div className="button_wrapper">
        <Button className='button' buttonText='测试' onClick={onClick} />
      </div>
      <FloatButton />
    </StartPageWrapper>
  )
}

const StartPageWrapper = styled.div`
  .button {
    width: 100%;
    &_wrapper {
      padding: 16px 16px;
    }
  }
`


