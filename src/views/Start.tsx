import { useState } from "react"
import styled from "styled-components"
import { Button } from "../components/Button"
import { Center } from "../components/Center"
import { FloatButton } from "../components/FloatButton"
import { Icon } from "../components/Icon"
import { Navbar } from "../components/Navbar"
import { Overlay } from "../components/Overlay"

export const Start = () => {
  const onButtonClick = () => { console.log('你好啊') }
  const [overlay, setOverlay] = useState(false)
  const clickMenu = () => { setOverlay(!overlay) }


  return (
    <StartPageWrapper>
      <Navbar title='viko 记账' iconSlot={iconSlot()} onClickMenu={clickMenu} />
      <CenterWrapper>
        <Center slotA={slotA()} className='pig_wrapper' />
      </CenterWrapper>
      <div className="button_wrapper">
        <Button className='button' buttonText='测试' onClick={onButtonClick} />
      </div>
      <FloatButton />
      {overlay && <Overlay onClickMenu={clickMenu} />}
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