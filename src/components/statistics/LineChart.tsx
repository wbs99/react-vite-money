import { useEffect, useRef } from "react"
import styled from "styled-components"
import * as echarts from 'echarts';

type Props = {
}

export const LineChart: React.FC<Props> = () => {
  const divRef = useRef<HTMLDivElement>(null)
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
  }, [])

  return (
    <LineChartWrapper ref={divRef}></LineChartWrapper>
  )
}

const LineChartWrapper = styled.div`
  height: 128px;
`