import { Outlet } from "react-router-dom"

type Props = {
}

export const ItemPage: React.FC<Props> = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}