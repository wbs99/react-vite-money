import { ReactElement, useEffect } from "react"
import styled from "styled-components"

type Props = {
  selected: string
  children: ReactElement[]
  onClick: (name: string) => void
}

export const Tabs: React.FC<Props> = (props) => {
  const tabs = props.children
  const { onClick } = props

  return (
    <TabsWrapper>
      <ol className="tabs_nav">
        {tabs.map(tab =>
          <li key={tab.props.name} onClick={() => { onClick(tab.props.name) }} className={tab.props?.name === props.selected ? 'selected' : ''}>{tab.props.name}</li>
        )}
      </ol>
      <div>
        {tabs.find(item => item.props?.name === props.selected)}
      </div>
    </TabsWrapper>
  )
}

interface TabProps {
  name: string
  children: string
}


export const Tab: React.FC<TabProps> = (props) => {
  const { children } = props
  return (
    <div>{children}</div>
  )
}

const TabsWrapper = styled.div`
  .tabs_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: var(--navbar-text);
    > li {
      flex-grow: 1;
      flex-shrink: 0;
      padding: 12px 0;
      background: var(--navbar-bg-end);
      &.selected {
        position: relative;
        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--tabs-indicator-bg);
        }
      }
    }
  }
  
`