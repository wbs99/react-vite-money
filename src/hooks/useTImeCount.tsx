// 倒计时 hooks
import { useEffect, useRef, useState } from "react"


export const useTimeCount = (time: number) => {
  const timer = useRef<number | undefined>()
  const [count, setCount] = useState(time)
  const [isCounting, setIsCounting] = useState(false)
  const startCount = () => {
    setIsCounting(true)
    timer.current = setInterval(() => {
      setCount((count) => count - 1)
    }, 1000)
  }
  useEffect(() => {
    if (count === 0) {
      clearInterval(timer.current)
      timer.current = undefined
      setIsCounting(false)
      setCount(time)
    }
  }, [count])
  return { startCount, isCounting, count }
}