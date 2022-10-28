import { useState } from "react"
import { DatetimePicker, Divider, Overlay, Popup } from "react-vant"
import styled from "styled-components"
import { Time } from "../../shared/time"
import { Start } from "../../views/Start"
import { Form, FormItem } from "../Form"
import { Icon } from "../Icon"
import { IconOverlay } from "../IconOverlay"
import { MainPage } from "../MainPage"
import { Tab, Tabs } from "../Tabs"
import { ItemSummary } from "./ItemSummary"

type Props = {
}

export const ItemList: React.FC<Props> = () => {
  const [selected, setSelected] = useState('本月')
  const onTabChange = (name: string) => {
    name === '自定义时间' && setVisible(true)
    setSelected(name)
  }
  const [customTime, setCustomTime] = useState({
    start: new Time().format(),
    end: new Time().format()
  })
  const time = new Time()
  const timeList = [
    {
      start: time.firstDayOfMonth(),
      end: time.lastDayOfMonth()
    },
    {
      start: time.add(-1, 'month').firstDayOfMonth(),
      end: time.add(-1, 'month').lastDayOfMonth()
    },
    {
      start: time.firstDayOfYear(),
      end: time.lastDayOfYear()
    }
  ]

  const [visible, setVisible] = useState(false)

  const onSubmitCustomTime = (e: React.FormEvent) => {
    e.preventDefault()
  }
  const onStartTimeChange = (start: string) => {
    setCustomTime({ ...customTime, start })
  }
  const [popupVisible, setPopupVisible] = useState(false)
  const onTimeConfirm = () => {
    setPopupVisible(false)
  }

  const onCancel = () => { setVisible(false) }
  const onConfirm = () => { setVisible(false) }

  return (
    <div>
      <MainPage
        title='viko 记账'
        iconSlot={<IconOverlay />}
        mainSlot={
          <>
            <Tabs selected={selected} onClick={onTabChange} className='tabs' >
              <Tab name="本月" >
                <ItemSummary
                  startDate={timeList[0].start.format()}
                  endDate={timeList[0].end.format()} />
              </Tab>
              <Tab name="上月">
                <ItemSummary
                  startDate={timeList[0].start.format()}
                  endDate={timeList[0].end.format()} />
              </Tab>
              <Tab name="今年">
                <ItemSummary
                  startDate={timeList[0].start.format()}
                  endDate={timeList[0].end.format()} />
              </Tab>
              <Tab name="自定义时间">
                <ItemSummary
                  startDate={timeList[0].start.format()}
                  endDate={timeList[0].end.format()} />
              </Tab>
            </Tabs>
            <OverlayWrapper >
              <Overlay visible={visible} onClick={() => setVisible(false)} className='overlay'
              >
                <div className="overlay_inner">
                  <header>
                    请选择时间
                  </header>
                  <SelectTimeWrapper>
                    <Form onSubmit={onSubmitCustomTime}>
                      <FormItem label="开始时间"
                        content={
                          <>
                            <input value={customTime.start} readOnly={true} onClick={() => {
                              setPopupVisible(true)
                            }} className='formItem input' />
                            <Popup
                              position='bottom'
                              visible={popupVisible}
                              onClose={() => { setPopupVisible(false) }}
                            >
                              <DatetimePicker
                                title='选择年月日'
                                type='date'
                                minDate={new Date(2020, 0, 1)}
                                maxDate={new Date(2025, 10, 1)}
                                value={customTime.start}
                                onChange={onStartTimeChange}
                                onCancel={() => { setPopupVisible(false) }}
                                onConfirm={onTimeConfirm}
                              />
                            </Popup>
                          </>
                        }
                      />
                      <FormItem label="结束时间"
                        content={
                          <>
                            <input value={customTime.end} readOnly={true}
                              onClick={() => { setPopupVisible(true) }} className='formItem input' />
                            <Popup
                              position='bottom'
                              visible={popupVisible}
                              onClose={() => { setPopupVisible(false) }}
                            >
                              <DatetimePicker
                                title='选择年月日'
                                type='date'
                                minDate={new Date(2020, 0, 1)}
                                maxDate={new Date(2025, 10, 1)}
                                value={customTime.end}
                                onChange={onStartTimeChange}
                                onCancel={() => { setPopupVisible(false) }}
                                onConfirm={onTimeConfirm}
                              />
                            </Popup>
                          </>
                        }
                      />
                      <FormItem
                        content={
                          <div className="actions">
                            <button type="button" onClick={onCancel}>取消</button>
                            <button type="submit" onClick={onConfirm}>确认</button>
                          </div>
                        }
                      />
                    </Form>
                  </SelectTimeWrapper>
                </div>
              </Overlay>
            </OverlayWrapper>

          </>
        }
      />
    </div>
  )
}

const OverlayWrapper = styled.div`
.overlay{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  background: var(--overlay-mask-bg);
  &_inner {
    background: var(--bg);
    width: 80vw;
    > header {
      background: var(--main);
      padding: 12px 16px;
      color: var(--dialog-header-text);
    }
    > main{
    }
  }
}
`

const SelectTimeWrapper = styled.main`
.actions{
   text-align: right;
  button {
    border: none;
    background: transparent;
    padding: 8px 16px;
    & + & {
      margin-left: 16px;
    }
  }

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
  &_value {
    display: flex;
    margin-top: 4px;
    > * {
      flex-grow: 1;
    }
  }
  &_errorHint {
    margin-top: 4px;
    color: var(--error-color);
    font-size: 12px;
  }
}
`