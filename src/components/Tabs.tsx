import { ReactElement, ReactNode, useEffect } from "react"
import styled from "styled-components"

interface Props {
  selected: string
  children: ReactElement[]
  onClick: (name: string) => void
  className: string
}

interface TabProps {
  name: string
  children: ReactNode
  className?: string
}

const TabsWrapper = styled.div`
flex-grow:1;
overflow:auto;
  .tabs_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: var(--navbar-text);
    position: sticky;
    z-index: 1;
    top: 0;
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


export const Tabs: React.FC<Props> = (props) => {
  const tabs = props.children
  const { onClick, className } = props
  return (
    <TabsWrapper >
      <ol className="tabs_nav">
        {tabs.map(tab =>
          <li key={tab.props.name} onClick={() => { onClick(tab.props.name) }} className={tab.props?.name === props.selected ? 'selected' : ''}>{tab.props.name}</li>
        )}
      </ol>
      <div className={className}>
        {tabs.find(item => item.props?.name === props.selected)}
      </div>
    </TabsWrapper>
  )
}

export const Tab: React.FC<TabProps> = (props) => {
  const { children } = props
  return (
    <>
      {children}
    </>
  )
}