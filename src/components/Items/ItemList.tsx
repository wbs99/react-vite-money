import { useEffect, useState } from "react"
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
          </>
        }
      />
    </div>
  )
}