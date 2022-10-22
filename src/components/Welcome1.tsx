import { useNavigate } from "react-router-dom"
import { Layout } from "./Layout"


export const Welcome1: React.FC = () => {
  const navigate = useNavigate()
  const onClick = () => { navigate('/welcome/2') }
  return (
    <Layout>
      <div onClick={onClick}>welcome 1</div>
    </Layout>
  )
}