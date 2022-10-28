import { useState } from "react"
import { Rules, validate } from "../../shared/validate"
import { Button } from "../Button"
import { EmojiSelect } from "../EmojiSelect"
import { Form, FormItem } from "../Form"

type Props = {
}

export const TagForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState({
    name: '',
    sign: ''
  })
  const [errors, setErrors] = useState<{ [k in keyof typeof formData]?: string[] }>({})
  const onButtonClick = () => { console.log('你好啊') }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const rules: Rules<typeof formData> = [
      { key: "name", type: "required", message: "必填" },
      { key: "name", type: "pattern", regex: /^.{1,4}$/, message: "只能填 1 到 4 个字符" },
      { key: "sign", type: "required", message: "必填" },
    ]
    const errors = validate(formData, rules)
    setErrors(errors)
  }
  const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, name: e.target.value }) }
  const onClickEmoji = (emoji: string) => { setFormData({ ...formData, sign: emoji }) }

  return (
    <Form onSubmit={onSubmit}>
      <FormItem label="标签名" error={errors['name'] && errors['name'].join()}
        content={
          <input
            value={formData.name}
            onChange={(e) => { onLabelChange(e) }}
            className="formItem input error"
          ></input>
        }
      />
      <FormItem label="符号" value={formData.sign} error={errors['sign'] && errors['sign'].join()}
        content={
          <EmojiSelect value={formData.sign} onClickEmoji={onClickEmoji} />
        }
      />
      <FormItem
        content={
          <p className="tips">记账时长按标签即可进行编辑</p>
        }
      />
      <FormItem
        content={
          <Button className="formItem button" buttonText='确定' onClick={onButtonClick} />
        }
      />
    </Form>
  )
}