import { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  iconSlot: ReactElement
  titleSlot: ReactElement
  navLinkSlot: ReactElement
}

export const MyLayout: React.FC<Props> = (props) => {
  const { iconSlot, titleSlot, navLinkSlot } = props
  return (
    <LayoutWrapper>
      <div className="card">
        {iconSlot}
        <br />
        {titleSlot}
      </div>
      <div className="actions">
        {navLinkSlot}
      </div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  > .card{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: var(--welcome-card-bg);
    border-radius: 8px;
    padding: 16px;
    margin: 16px 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    > h2 {
      margin-top: 40px;
    }
  }
  > .actions{
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    margin: 0 16px;
    font-size: 32px;
    padding: 24px 0;
    color: var(--welcome-text);
    > .fake{visibility: hidden;}
  }
  
`