import { useEffect, useRef, useState } from "react"
import { TimeTabLayout } from "../../layouts/TimeTabLayout"
import { Form, FormItem } from "../Form"
import { Icon } from "../Icon"
import { ItemSummary } from "../Items/ItemSummary"
import { Select } from "../Select"
import * as echarts from 'echarts';
import styled from "styled-components"

type Props = {
}

export const Chart: React.FC<Props> = () => {
  const [selectOptions, setSelectOptions] = useState([
    { value: 'expenses', text: '支出' },
    { value: 'income', text: '收入' }
  ])
  const onSubmit = () => { }
  const divRef = useRef<HTMLDivElement>(null)
  const divRef2 = useRef<HTMLDivElement>(null)
  const [lineData, setLineData] = useState([
    { tag: { id: 1, name: '房租', sign: 'x' }, amount: 3000 },
    { tag: { id: 2, name: '吃饭', sign: 'x' }, amount: 1000 },
    { tag: { id: 3, name: '娱乐', sign: 'x' }, amount: 900 },

  ])
  const betterLineData = () => {
    const total = lineData.reduce((sum, item) => sum + item.amount, 0)
    return lineData.map(item => ({
      ...item,
      percent: `${Math.round(item.amount / total * 100)}%`
    }))
  }


  useEffect(() => {
    if (divRef.current === null) { return }
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      grid: [
        { left: 0, top: 0, right: 0, bottom: 20 }
      ],
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    });

    if (divRef2.current === null) { return }
    var myChart2 = echarts.init(divRef2.current);
    const option = {
      grid: [
        { left: 0, top: 0, right: 0, bottom: 20 }
      ],
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    myChart2.setOption(option);
  }, [])
  return (
    <div>
      <TimeTabLayout title='统计图表' icon={<Icon name='left' />}
        content={
          (startDate, endDate) =>
            <>
              <Form onSubmit={onSubmit}>
                <FormItem label="类型"
                  content={
                    <Select options={selectOptions} />
                  }
                />
              </Form>
              <EchartsDemoWrapper ref={divRef}></EchartsDemoWrapper>
              <EchartsPieWrapper ref={divRef2}></EchartsPieWrapper>
              <LineEchartsWrapper>
                {betterLineData().map(({ tag, amount, percent }) => {
                  return (
                    <div className="topItem" key={tag.id}>
                      <div className="sign">
                        {tag.sign}
                      </div>
                      <div className="bar_wrapper">
                        <div className="bar_text">
                          <span> {tag.name} - {percent} </span>
                          <span> ￥{amount} </span>
                        </div>
                        <div className="bar">
                          <div className="bar_inner"></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </LineEchartsWrapper>
            </>
        }
      />
    </div>
  )
}

const EchartsDemoWrapper = styled.div`
  height: 128px;
`
const EchartsPieWrapper = styled.div`
  height:100vw;
`
const LineEchartsWrapper = styled.div`
  margin-bottom: 128px;
  margin-left:16px;
  margin-right:16px;

.topItem {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sign {
    flex-grow: 0;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--tag-bg);
    border-radius: 50%;
  }
  .bar_wrapper {
    margin-left: 8px;
    flex-grow: 1;
    flex-shrink: 1;
    .bar_text {
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .bar {
      height: 8px;
      border-radius: 4px;
      background: var(--bar-bg);
      position: relative;
      overflow: hidden;
      margin-top: 4px;
    }
    .bar_inner {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 42px;
    }
  }
  &:nth-child(1) {
    .bar_inner {
      background: #eba953;
    }
  }
  &:nth-child(2) {
    .bar_inner {
      background: #53a867;
    }
  }
  &:nth-child(3) {
    .bar_inner {
      background: #91cc75;
    }
  }
}

`