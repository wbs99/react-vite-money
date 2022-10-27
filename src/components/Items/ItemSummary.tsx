import styled from "styled-components"
import { FloatButton } from "../FloatButton"

type Props = {
  startDate: string
  endDate: string
}

export const ItemSummary: React.FC<Props> = () => {
  return (
    <Wrapper >
      <ul className="total">
        <li><span>收入</span><span>128</span></li>
        <li><span>支出</span><span>99</span></li>
        <li><span>净收入</span><span>39</span></li>
      </ul>
      <ol className="list">
        <li>
          <div className="sign">
            <span>X</span>
          </div>
          <div className="text">
            <div className="tagAndAmount">
              <span className="tag">旅行</span>
              <span className="amount">￥1234</span>
            </div>
            <div className="time">
              2000-01-01 12:39
            </div>
          </div>
        </li>
        <li>
          <div className="sign">
            <span>X</span>
          </div>
          <div className="text">
            <div className="tagAndAmount">
              <span className="tag">旅行</span>
              <span className="amount">￥1234</span>
            </div>
            <div className="time">
              2000-01-01 12:39
            </div>
          </div>
        </li>
        <li>
          <div className="sign">
            <span>X</span>
          </div>
          <div className="text">
            <div className="tagAndAmount">
              <span className="tag">旅行</span>
              <span className="amount">￥1234</span>
            </div>
            <div className="time">
              2000-01-01 12:39
            </div>
          </div>
        </li>
        <li>
          <div className="sign">
            <span>X</span>
          </div>
          <div className="text">
            <div className="tagAndAmount">
              <span className="tag">旅行</span>
              <span className="amount">￥1234</span>
            </div>
            <div className="time">
              2000-01-01 12:39
            </div>
          </div>
        </li>
        <li>
          <div className="sign">
            <span>X</span>
          </div>
          <div className="text">
            <div className="tagAndAmount">
              <span className="tag">旅行</span>
              <span className="amount">￥1234</span>
            </div>
            <div className="time">
              2000-01-01 12:39
            </div>
          </div>
        </li>
        <li>
          <div className="sign">
            <span>X</span>
          </div>
          <div className="text">
            <div className="tagAndAmount">
              <span className="tag">旅行</span>
              <span className="amount">￥1234</span>
            </div>
            <div className="time">
              2000-01-01 12:39
            </div>
          </div>
        </li>
      </ol>
      <div className="more">向下滑动加载更多</div>
      <FloatButton />
    </Wrapper>
  )
}

const Wrapper = styled.div`
.total {
  background: var(--total-bg);
  display: flex;
  justify-content: space-between;
  color: var(--total-text);
  margin: 16px;
  border-radius: var(--button-radius);
  padding: 0 16px; 
  > li {
    padding: 16px;
    display: flex;
    flex-direction: column;
    text-align: center;
    &:first-child {
      color: var(--total-income);
    }
    &:nth-child(2) {
      color: var(--total-expenses);
    }
  }
}
.list{
  > li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid var(--button-border-color);
    padding: 12px 16px;
  }
  .sign{
    flex-grow: 0;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--tag-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
  }
  .text{
    margin-right: 4px;
    margin-left: 4px;
    flex-grow: 1;
    flex-shrink: 1;
    .tagAndAmount{
      display: flex;
      justify-content: space-between;
      .tag{
        color: var(--list-tag-text);
      }
      .amount{
        color: var(--list-amount-text);
      }
    }
    .time{
      color: var(--list-time-text);
      margin-top: 4px;
    }
  }
}
.more{
  padding-top: 32px;
  text-align: center;
}
  
`