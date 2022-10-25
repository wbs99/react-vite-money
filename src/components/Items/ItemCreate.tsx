import { ReactElement, useState } from "react"
import styled from "styled-components"
import { Icon } from "../Icon"
import { MainPage } from "../MainPage"
import { Tab, Tabs } from "../Tabs"
import { InputPad } from "./InputPad"

type Props = {
}

export const ItemCreate: React.FC<Props> = () => {
  return (
    <MainPage title='记一笔' iconSlot={iconSlot()} mainSlot={mainSlot()} />
  )
}

const iconSlot = () => {
  return (
    <Icon name='left' />
  )

}
const mainSlot = () => {
  const [selected, setSelected] = useState('支出')
  const onTabChange = (name: string) => {
    setSelected(name)
  }
  return (
    <>
      <Tabs selected={selected} onClick={onTabChange} >
        <Tab name='支出'>
          icon 列表
        </Tab>
        <Tab name='收入'>
          icon 列表2
        </Tab>
      </Tabs>
      <InputPadWrapper>
        <InputPad />
      </InputPadWrapper>
    </>
  )
}

const InputPadWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`