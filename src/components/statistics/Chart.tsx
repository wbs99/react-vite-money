import { useState } from "react"
import { TimeTabLayout } from "../../layouts/TimeTabLayout"
import { Form, FormItem } from "../Form"
import { Icon } from "../Icon"
import { Select } from "../Select"
import { BarChart } from "./BarChart"
import { LineChart } from "./LineChart"
import { PieChart } from "./PieChart"

type Props = {
}

export const Chart: React.FC<Props> = () => {
  const [selectOptions, setSelectOptions] = useState([
    { value: 'expenses', text: '支出' },
    { value: 'income', text: '收入' }
  ])
  const onSubmit = () => { }


  return (
    <div>
      <TimeTabLayout title='统计图表' icon={<Icon name='left' />}
        content={
          (startDate, endDate) =>
            <>
              <Form onSubmit={onSubmit}>
                <FormItem label="类型"
                  content={
                    <Select options={selectOptions} />
                  }
                />
              </Form>
              <LineChart />
              <PieChart />
              <BarChart />
            </>
        }
      />
    </div>
  )
}



