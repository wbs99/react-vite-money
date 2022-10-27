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
  const onButtonClick = (theme = 'light') => {
    const element = document.documentElement
    !element.hasAttribute('theme') ? element.setAttribute('theme', theme) : element.removeAttribute('theme')
  }
  return (
    <StartPageWrapper>
      <MainPage
        title='viko 记账'
        iconSlot={<Icon name='menu' onClick={clickMenu} />}
        onClickMenu={clickMenu}
        mainSlot={
          <>
            <CenterWrapper>
              <Center
                slotA={<Icon name="pig" />}
                className='pig_wrapper'
              />
            </CenterWrapper>
            <div className="button_wrapper">
              <Button className='button' buttonText='测试' onClick={() => { onButtonClick('dark') }} />
            </div>
            <FloatButton />
            {overlay && <Overlay onClickMenu={clickMenu} />}
          </>
        }
      />
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

const CenterWrapper = styled.div`
>.pig_wrapper{
  padding: 120px 0;
}
`