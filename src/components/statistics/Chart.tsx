import { TimeTabLayout } from "../../layouts/TimeTabLayout"
import { Icon } from "../Icon"
import { ItemSummary } from "../Items/ItemSummary"

type Props = {
}

export const Chart: React.FC<Props> = () => {
  return (
    <div>
      <TimeTabLayout title='统计图表' icon={<Icon name='left' />}
        content={
          (startDate, endDate) => <div>123</div>
        }
      />
    </div>
  )
}