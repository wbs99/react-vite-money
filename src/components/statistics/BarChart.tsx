import { useState } from "react"
import styled from "styled-components"

type Props = {
}

export const BarChart: React.FC<Props> = () => {
  const [barData, setBarData] = useState([
    { tag: { id: 1, name: '房租', sign: 'x' }, amount: 3000 },
    { tag: { id: 2, name: '吃饭', sign: 'x' }, amount: 1000 },
    { tag: { id: 3, name: '娱乐', sign: 'x' }, amount: 900 },
  ])
  const betterBarData = () => {
    const total = barData.reduce((sum, item) => sum + item.amount, 0)
    return barData.map(item => ({
      ...item,
      percent: `${Math.round(item.amount / total * 100)}%`
    }))
  }
  return (
    <BarChartWrapper>
      {betterBarData().map(({ tag, amount, percent }) => {
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
    </BarChartWrapper>
  )
}

const BarChartWrapper = styled.div`
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