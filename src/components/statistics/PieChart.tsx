import { useEffect, useRef } from "react"
import styled from "styled-components"
import * as echarts from 'echarts';

type Props = {
}

export const PieChart: React.FC<Props> = () => {
  const refDiv = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (refDiv.current === null) { return }
    const myChart = echarts.init(refDiv.current);
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
    myChart.setOption(option);
  }, [])

  return (
    <PieChartWrapper ref={refDiv}></PieChartWrapper>
  )
}

const PieChartWrapper = styled.div`
  height:100vw;
`