import { useState } from "react"
import styled from "styled-components"
import { Button } from "../components/Button"
import { Center } from "../components/Center"
import { FloatButton } from "../components/FloatButton"
import { Icon } from "../components/Icon"
import { Overlay } from "../components/Overlay"
import { MainPage } from "../components/MainPage"

export const Start = () => {
  const [overlay, setOverlay] = useState(false)
  const clickMenu = () => { setOverlay(!overlay) }
  return (
    <StartPageWrapper>
      <MainPage title='viko 记账' iconSlot={iconSlot(clickMenu)} onClickMenu={clickMenu} mainSlot={mainSlot(overlay, clickMenu)} />
    </StartPageWrapper>
  )
}


const iconSlot = (clickMenu: () => void) => {
  return (
    <Icon name='menu' onClick={clickMenu} />
  )

}
const mainSlot = (overlay: boolean, clickMenu: () => void) => {
  const onButtonClick = (theme = 'light') => {
    const element = document.documentElement
    !element.hasAttribute('theme') ? element.setAttribute('theme', theme) : element.removeAttribute('theme')
  }

  return (
    <>
      <CenterWrapper>
        <Center slotA={slotA()} className='pig_wrapper' />
      </CenterWrapper>
      <div className="button_wrapper">
        <Button className='button' buttonText='测试' onClick={() => { onButtonClick('dark') }} />
      </div>
      <FloatButton />
      {overlay && <Overlay onClickMenu={clickMenu} />} </>
  )
}
const slotA = () => {
  return (
    <Icon name="pig" />
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

const CenterWrapper = styled.div`
>.pig_wrapper{
  padding: 120px 0;

}
  
`