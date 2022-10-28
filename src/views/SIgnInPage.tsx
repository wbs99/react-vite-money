import { FormEvent, useState } from "react"
import styled from "styled-components"
import { Button } from "../components/Button"
import { Form, FormItem } from "../components/Form"
import { Icon } from "../components/Icon"
import { MainPage } from "../components/MainPage"
import { Rules, validate } from "../shared/validate"

type Props = {
}

export const SignInPage: React.FC<Props> = () => {

  const [formData, setFormData] = useState({
    email: '',
    code: ''
  })
  const [errors, setErrors] = useState<{ [k in keyof typeof formData]?: string[] }>({})

  const rules: Rules<typeof formData> = [
    { key: 'email', type: 'required', message: '必填' },
    { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
    { key: 'code', type: 'required', message: '必填' },
  ]
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setErrors({ email: [], code: [] })
    const errors = validate(formData, rules)
    setErrors(errors)
  }
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value })
  }
  const onButtonClick = () => { }
  return (
    <MainPage title='登录'
      iconSlot={< Icon name="left" />}
      mainSlot={
        <SignInPageWrapper >
          <div className="logo">
            <Icon className="icon" name="mangosteen" />
            <h1 className="appName">viko记账</h1>
          </div>
          <Form onSubmit={onSubmit}>
            <FormItem label="邮箱地址" error={errors['email'] && errors['email'].join()}
              content={
                <input
                  value={formData.email}
                  onChange={(e) => { onEmailChange(e) }}
                  className="formItem input"
                ></input>
              }
            />
            <FormItem label="验证码" error={errors['code'] && errors['code'].join()}
              content={
                <>
                  <input className="formItem input validationCodeInput"
                    placeholder='六位数字' />
                  <Button buttonText='发送验证码' onClick={onButtonClick} className='formItem button validationCodeButton' />
                </>
              }
            />
          </Form>
        </SignInPageWrapper>
      }
    />
  )
}

const SignInPageWrapper = styled.div`
.logo{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 42px 0 0;
  .icon{
    width: 64px;
    height: 68px;
  }
  .appName{
    color: var(--app-name-text);    
    font-weight: bold;
    font-size: 32px;
  }
}
`