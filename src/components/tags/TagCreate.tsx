import React from "react"
import { Icon } from "../Icon"
import { MainPage } from "../MainPage"
import { TagForm } from "./TagForm"

type Props = {
}

export const TagCreate: React.FC<Props> = () => {
  return (
    <div>
      <MainPage
        title='创建标签'
        iconSlot={<Icon name='left' />}
        mainSlot={<TagForm />}
      />
    </div>
  )
}