import styled from "styled-components"

type Props = {
  buttonText: string
  onClick: () => void
  className?: string
  disabled?: boolean
  buttonType?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<Props> = (props) => {
  const { buttonText, onClick, disabled, className, buttonType } = props
  return (
    <ButtonWrapper disabled={disabled} onClick={() => onClick()} className={className} type={buttonType}>{buttonText}</ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  border: 1px solid var(--button-bg);
  padding: 8px 16px;
  background: var(--button-bg);
  color: var(--button-text);
  font-size: var(--button-font-size);
  border-radius: var(--button-radius);
  height: var(--button-height);
  &.danger{
    background:var(--button-bg-danger);
  }
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`