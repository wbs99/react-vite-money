import { useParams } from 'react-router-dom'

export const Test = () => {
  const { id } = useParams()

  return (
    <div>
      这是路由 {id}
    </div>
  )
}