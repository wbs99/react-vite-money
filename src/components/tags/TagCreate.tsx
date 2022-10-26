import { ReactHTML, useState } from "react"
import styled from "styled-components"
import { Button } from "../Button"
import { EmojiSelect } from "../EmojiSelect"
import { Icon } from "../Icon"
import { MainPage } from "../MainPage"

type Props = {
}

export const TagCreate: React.FC<Props> = () => {
  return (
    <div>
      <MainPage title='创建标签' iconSlot={iconSlot()} mainSlot={mainSlot()} />
    </div>
  )
}

const iconSlot = () => {
  return (
    <Icon name='left' />
  )
}

const mainSlot = () => {
  const [formData, setFormData] = useState({
    name: '',
    sign: ''
  })
  const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value })
  }
  const onButtonClick = () => { console.log('你好啊') }
  const onClickEmoji = (emoji: string) => { setFormData({ ...formData, sign: emoji }) }
  return (
    <FormWrapper>
      <form className="form">
        <div className="formRow">
          <label className="formLabel">
            <span className="formItem_name">标签名</span>
            <div className="formItem_value">
              <input value={formData.name} onChange={(e) => { onLabelChange(e) }} className="formItem input error"></input>
            </div>
            <div className="formItem_errorHint">
              <span>必填</span>
            </div>
          </label>
        </div>
        <div className="formRow">
          <label className="formLabel">
            <span className="formItem_name">符号 {formData.sign}</span>
            <div className="formItem_value">
              <EmojiSelect value={formData.sign} onClickEmoji={onClickEmoji} />
            </div>
            <div className="formItem_errorHint">
              <span>必填</span>
            </div>
          </label>
        </div>
        <p className="tips">记账时长按标签即可进行编辑</p>
        <div className="formRow">
          <div className="formItem_value">
            <Button className="formItem button" buttonText='确定' onClick={onButtonClick} />
          </div>
        </div>
      </form>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
.tips{
  text-align: center;
  padding: 16px 0;
}
.form {
  padding: 16px;
}
.formRow {
  margin-top: 8px;
}
.formLabel {
}
.formItem {
  min-height: var(--input-min-height);
  max-width: 100%;
  &.input {
    flex-grow: 1;
    border: 1px solid var(--input-border-color);
    border-radius: var(--input-radius);
    font-size: 18px;
    font-family: inherit;
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: inset 0 0 3px var(--input-shadow);
    &.error {
      border-color: var(--error-color);
    }
  }
   &.button{
    width: 100%;
  }
  &_name {
  }
  &_value {
    display: flex;
    margin-top: 4px;
  }
  &_errorHint {
    margin-top: 4px;
    color: var(--error-color);
    font-size: 12px;
  }
}
`

