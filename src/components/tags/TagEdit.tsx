import styled from "styled-components"
import { Button } from "../Button"
import { Icon } from "../Icon"
import { MainPage } from "../MainPage"
import { TagForm } from "./TagForm"

type Props = {
}

export const TagEdit: React.FC<Props> = () => {
  const onButtonClick = () => { }

  return (
    <div>
      <MainPage
        title='编辑标签'
        iconSlot={<Icon name='left' />}
        mainSlot={
          <>
            <TagForm />
            <ButtonWrapper>
              <Button buttonText='删除标签' onClick={onButtonClick} className='removeTags danger' />
              <Button buttonText='删除标签和记账' onClick={onButtonClick} className='removeTagsAndItems danger' />
            </ButtonWrapper>
          </>
        }
      />
    </div>
  )
}

const ButtonWrapper = styled.div`
padding:16px;
display:flex;
justify-content:space-between;
.removeTags,.removeTagsAndItems{
  width:calc(50% - 8px);
}
`