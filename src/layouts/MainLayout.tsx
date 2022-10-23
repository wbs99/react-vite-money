import { Outlet } from 'react-router-dom'
import styled from 'styled-components';
import { Icon } from '../components/Icon'

export const MainLayout: React.FC = () => {
  return (
    <Wrapper>
      <header>
        <Icon name='mangosteen' />
        <h1>山竹记账</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #5d33be 0%, #8f4cd7 100%);
  > header {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 66px;
    color: #D4D4EE;
  }
  > main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  > footer {
    flex-shrink: 0;
  }
`
