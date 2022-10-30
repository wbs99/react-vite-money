// 处理 useEffect 的多余渲染
import { useEffect, useRef } from "react"

export const useUpdate = (fn: () => void, dependency: any) => {
  const count = useRef(0)
  useEffect(() => {
    count.current += 1
  })
  useEffect(() => {
    if (count.current > 1) {
      fn()
    }
  }, [fn, dependency])
}