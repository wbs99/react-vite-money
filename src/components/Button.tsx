import styled from "styled-components"

type Props = {
  buttonText: string
  onClick: () => void
  className: string
}

export const Button: React.FC<Props> = (props) => {
  const { buttonText, onClick, ...rest } = props
  return (
    <ButtonWrapper onClick={() => onClick()} {...rest}>{buttonText}</ButtonWrapper>
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
`