import { Outlet } from "react-router-dom"

type Props = {
}

export const TagPage: React.FC<Props> = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}