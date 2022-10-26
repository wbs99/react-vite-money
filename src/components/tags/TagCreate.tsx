import styled from "styled-components"
import { Button } from "../Button"
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
  const onButtonClick = () => {
    console.log('你好啊')
  }
  return (
    <FormWrapper>
      <form className="form">
        <div className="formRow">
          <label className="formLabel">
            <span className="formItem_name">标签名</span>
            <div className="formItem_value">
              <input className="formItem input error"></input>
            </div>
            <div className="formItem_errorHint">
              <span>必填</span>
            </div>
          </label>
        </div>
        <div className="formRow">
          <label className="formLabel">
            <span className="formItem_name">符号</span>
            <div className="formItem_value">
              <div className="formItem emojiList error">
                <nav>
                  <span className="selected">表情</span>
                  <span>手势</span>
                  <span>职业</span>
                  <span>衣服</span>
                  <span>动物</span>
                  <span>自然</span>
                  <span>食物</span>
                  <span>运动</span>
                  <span>表情</span>
                  <span>手势</span>
                  <span>职业</span>
                  <span>衣服</span>
                  <span>动物</span>
                  <span>自然</span>
                  <span>食物</span>
                  <span>运动</span>
                </nav>
                <ol>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                  <li>😀</li>
                </ol>
              </div>
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
  &.emojiList {
    flex-grow: 1;
    border: 1px solid var(--input-border-color);
    border-radius: var(--input-radius);
    font-size: 18px;
    font-size: 14px;
    &.error {
      border-color: var(--error-color);
    }
    > nav {
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      padding: 0 4px;
      &::-webkit-scrollbar {
        display: none;
      }
      > span {
        flex-shrink: 0;
        display: inline-block;
        padding: 8px;
        color: var(--emoji-nav-text);
        &.selected {
          color: var(--emoji-nav-text-selected);
        }
      }
    }
    > ol {
      display: flex;
      flex-wrap: wrap;
      font-size: 22px;
      line-height: 32px;
      height: calc(32px * 12);
      overflow: auto;
      padding: 0 4px;
      &::-webkit-scrollbar {
        display: none;
      }
      > li {
        flex-shrink: 0;
        flex-grow: 0;
        width: 10%;
        text-align: center;
      }
    }
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

