import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Icon } from "./Icon"


type Props = {
  onClickMenu?: () => void
}

export const Overlay: React.FC<Props> = (props) => {
  const { onClickMenu } = props

  return (
    <>
      <Mask onClick={onClickMenu} ></Mask>
      <OverlayWrapper >
        <section className="currentUser">
          <h2>未登录用户</h2>
          <p>点击这里登录</p>
        </section>
        <nav>
          <ul className="action_list" >
            <li>
              <NavLink to="/statistics" className='action'>
                <Icon name="charts" className="icon" />
                <span>统计图表</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/export" className='action'>
                <Icon name="export" className="icon" />
                <span>导出数据</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/notify" className='action'>
                <Icon name="notify" className="icon" />
                <span>记账提醒</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </OverlayWrapper>
    </>
  )
}

const Mask = styled.div`
  position: fixed;
  z-index: var(--z-index-overlay);
  background: var(--overlay-mask-bg);
  top: var(--top-safe-area-height);
  left: 0;
  width: 100%;
  height: calc(100% - var(--top-safe-area-height));
`
const OverlayWrapper = styled.div`
  position: fixed;
  z-index: calc(var(--z-index-overlay) + 1);
  background: var(--overlay-bg);
  top: var(--top-safe-area-height);
  left: 0;
  width: 16em;
  height: calc(100% - var(--top-safe-area-height));
  color: var(--text);
  .currentUser {
  padding: 32px 16px;
  background: var(--overlay-user-bg);
  color: var(--overlay-user-text);
}
.action {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 12px 16px;
  &_list {
    padding-top: 16px;
    font-size: 20px;
  }
  > .icon {
    margin-right: 12px;
    width:1.2em;
    height:1.2em;
  }
}
`