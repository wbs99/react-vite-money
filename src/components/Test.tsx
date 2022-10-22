import { useParams } from 'react-router-dom'
import { SlotTest } from './SlotTest'

export const Test = () => {
  const { id } = useParams()

  return (
    <>
      这是路由 {id}
      <div>
        <SlotTest title='你好啊' slotA={slotA()} slotB={slotB()} />
      </div>
    </>
  )
}



const slotA = () => {
  return (
    <>
      这是 slot A 的内容
    </>
  )
}

const slotB = () => {
  return (
    <>
      这是 slot b 的内容
    </>
  )
}