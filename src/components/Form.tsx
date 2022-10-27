import React, { ReactNode } from "react"
import styled from "styled-components"

type FormProps = {
  onSubmit: (e: React.FormEvent) => void
  children: ReactNode
}

export const Form: React.FC<FormProps> = (props) => {
  return (
    <FormWrapper onSubmit={props.onSubmit}>{props.children}</FormWrapper>
  )
}


type FormItemProps = {
  label?: string
  error?: string
  value?: string | number
  content: ReactNode
}

export const FormItem: React.FC<FormItemProps> = (props) => {
  const { label, value, error, content } = props
  return (
    <FormItemWrapper >
      <label className="formLabel">
        <span className="formItem_name">{label} {value}</span>
        <div className="formItem_value">
          {content}
        </div>
        <div className="formItem_errorHint">
          <span>{error}</span>
        </div>
      </label>
    </FormItemWrapper>
  )
}

const FormWrapper = styled.form`
  padding: 16px;
`
const FormItemWrapper = styled.div`
    margin-top: 8px;
.formLabel {
}
.formItem {
  min-height: var(--input-min-height);
  max-width: 100%;
  &.input {
    flex-grow: 1;
    border: 1px solid var(--input-border-color);
    border-radius: var(--input-radius);
    font-size: 18px;
    font-family: inherit;
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: inset 0 0 3px var(--input-shadow);
    &.error {
      border-color: var(--error-color);
    }
  }
   &.button{
    width: 100%;
  }
  &_name {
  }
  &_value {
    display: flex;
    margin-top: 4px;
  }
  &_errorHint {
    margin-top: 4px;
    color: var(--error-color);
    font-size: 12px;
  }
  .tips{
  text-align: center;
  padding: 16px 0;
}
}
`