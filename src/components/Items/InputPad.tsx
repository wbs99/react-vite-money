import { useState } from "react"
import { DatetimePicker, Popup } from "react-vant"
import styled from "styled-components"
import { time } from "../../shared/time"
import { Icon } from "../Icon"

type Props = {
}

export const InputPad: React.FC<Props> = () => {
  const now = new Date()
  const [date, setData] = useState<Date>(now)
  const [datePickerVisible, setDatePickerVisible] = useState(false)
  const [amount, setAmount] = useState('')
  const appendText = (n: number | string) => {
    const nString = n.toString()
    const dotIndex = amount.indexOf('.')
    if (amount.length >= 13) {
      return
    }
    if (dotIndex >= 0 && amount.length - dotIndex > 2) {
      return
    }
    if (nString === '.') {
      if (dotIndex >= 0) { // 已经有小数点了
        return
      }
    } else if (nString === '0') {
      if (dotIndex === -1) { // 没有小数点
        if (amount === '0') { // 没小数点，但是有0
          return
        }
      }
    } else {
      if (amount === '0') {
        setAmount('')
      }
    }
    setAmount(amount + n)
  }
  const buttons = [
    { text: '1', onClick: () => { appendText(1) } },
    { text: '2', onClick: () => { appendText(2) } },
    { text: '3', onClick: () => { appendText(3) } },
    { text: '4', onClick: () => { appendText(4) } },
    { text: '5', onClick: () => { appendText(5) } },
    { text: '6', onClick: () => { appendText(6) } },
    { text: '7', onClick: () => { appendText(7) } },
    { text: '8', onClick: () => { appendText(8) } },
    { text: '9', onClick: () => { appendText(9) } },
    { text: '.', onClick: () => { appendText('.') } },
    { text: '0', onClick: () => { appendText(0) } },
    { text: '清空', onClick: () => { setAmount('0') } },
    { text: '提交', onClick: () => { } },
  ]
  const showDatePicker = () => { setDatePickerVisible(true) }
  const hideDatePicker = () => { setDatePickerVisible(false) }
  const onDatePickerConfirm = (date: Date) => {
    setData(date)
    hideDatePicker()
  }

  return (
    <>
      <DateAndAmountWrapper >
        <span className='date'>
          <Icon name="date" />
          <span>
            <span onClick={showDatePicker}>{time(date).format()}</span>
            <Popup
              position='bottom'
              style={{ height: '30%' }}
              visible={datePickerVisible}
              onClose={hideDatePicker}
            >
              <DatetimePicker
                title='选择年月日'
                type='date'
                minDate={new Date(2020, 0, 1)}
                maxDate={new Date(2025, 10, 1)}
                value={date}
                onConfirm={onDatePickerConfirm}
              />
            </Popup>
            {/* <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
              <DatetimePicker value={refDate.value} type="date" title="选择年月日"
                onConfirm={setDate} onCancel={hideDatePicker}
              />
            </Popup> */}
          </span>
        </span>
        <span className="amount">{amount}</span>
      </DateAndAmountWrapper>
      <ButtonsWrapper >
        {buttons.map(button =>
          <button onClick={button.onClick} key={button.text}>{button.text}</button>
        )}
      </ButtonsWrapper>
    </>
  )
}

const DateAndAmountWrapper = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-family: monospace;
  border-top: 1px solid var(--button-border-color);
  > .date {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: start;
    color: var(--date-text);
    .icon {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      fill: var(--amount-text);
    }
  }
  > .amount {
    font-size: 20px;
    color: var(--amount-text);
  }
  .icon{
    width:1.2em;
    height: 1.2em;

  }
`

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "n1 n2 n3 d"
    "n4 n5 n6 d"
    "n7 n8 n9 s"
    "n0 n0 nd s";
  grid-auto-rows: 48px;
  grid-auto-columns: 1fr;
  gap: 1px;
  flex-wrap: wrap;
  background: var(--button-border-color);
  border-top: 1px solid var(--button-border-color);
  > button {
    border: none;
    background: var(--number-button-bg);
    &:nth-child(1) {
      grid-area: n1;
    }
    &:nth-child(2) {
      grid-area: n2;
    }
    &:nth-child(3) {
      grid-area: n3;
    }
    &:nth-child(4) {
      grid-area: n4;
    }
    &:nth-child(5) {
      grid-area: n5;
    }
    &:nth-child(6) {
      grid-area: n6;
    }
    &:nth-child(7) {
      grid-area: n7;
    }
    &:nth-child(8) {
      grid-area: n8;
    }
    &:nth-child(9) {
      grid-area: n9;
    }
    &:nth-child(10) {
      grid-area: nd;
    }
    &:nth-child(11) {
      grid-area: n0;
    }
    &:nth-child(12) {
      grid-area: d;
    }
    &:nth-child(13) {
      grid-area: s;
     background: var(--number-button-bg-important);
      color: var(--number-button-text-important);
    }
  }
  
`