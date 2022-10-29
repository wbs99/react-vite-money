import { TimeTabLayout } from "../../layouts/TimeTabLayout"
import { IconOverlay } from "../IconOverlay"
import { ItemSummary } from "./ItemSummary"

type Props = {
}

export const ItemList: React.FC<Props> = () => {

  return (
    <div>
      <TimeTabLayout title='viko 记账' icon={<IconOverlay />}
        content={
          (startDate, endDate) => <ItemSummary startDate={startDate} endDate={endDate} />
        }
      />
    </div>
  )
}