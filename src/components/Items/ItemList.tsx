import { useEffect, useState } from "react"
import { Overlay } from "react-vant"
import styled from "styled-components"
import { Time } from "../../shared/time"
import { Icon } from "../Icon"
import { MainPage } from "../MainPage"
import { Tab, Tabs } from "../Tabs"
import { ItemSummary } from "./ItemSummary"

type Props = {
}

export const ItemList: React.FC<Props> = () => {
  const [selected, setSelected] = useState('本月')
  const onTabChange = (name: string) => { setSelected(name) }

  const [customTime, setCustomTime] = useState({
    start: new Time(),
    end: new Time()
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

  const [visible, setVisible] = useState(true)


  return (
    <div>
      <MainPage
        title='viko 记账'
        iconSlot={<Icon name='menu' />}
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
                  <main>
                    <form>
                      <div>111

                      </div>
                      <div>222

                      </div>
                    </form>
                  </main>
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