import styled from "styled-components"
import { Button } from "../components/Button"
import { Center } from "../components/Center"
import { FloatButton } from "../components/FloatButton"
import { Icon } from "../components/Icon"
import { Navbar } from "../components/Navbar"

export const Start = () => {
  const onClick = () => { console.log('你好啊') }

  return (
    <StartPageWrapper>
      <Navbar title='viko 记账' iconSlot={iconSlot()} />
      <CenterWrapper>
        <Center slotA={slotA()} className='pig_wrapper' />
      </CenterWrapper>
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

const slotA = () => {
  return (
    <Icon name="pig" />
  )
}

const iconSlot = () => {
  return (
    <Icon name='menu' />
  )

}

const CenterWrapper = styled.div`
>.pig_wrapper{
  padding: 120px 0;

}
  
`