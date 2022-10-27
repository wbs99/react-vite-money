import { ReactElement, useState } from "react"
import styled from "styled-components"
import { Icon } from "../Icon"
import { MainPage } from "../MainPage"
import { Tab, Tabs } from "../Tabs"
import { InputPad } from "./InputPad"

type Props = {
}


export const ItemCreate: React.FC<Props> = () => {
  const [selected, setSelected] = useState('支出')
  const onTabChange = (name: string) => { setSelected(name) }
  const [expenseTag, setExpenseTags] = useState([
    { id: 1, name: '餐费', sign: '￥', category: 'expenses' },
    { id: 2, name: '打车', sign: '￥', category: 'expenses' },
    { id: 3, name: '聚餐', sign: '￥', category: 'expenses' },
    { id: 4, name: '打车', sign: '￥', category: 'expenses' },
    { id: 5, name: '聚餐', sign: '￥', category: 'expenses' },
    { id: 6, name: '打车', sign: '￥', category: 'expenses' },
    { id: 7, name: '聚餐', sign: '￥', category: 'expenses' },
  ])
  const [incomeTags, setIncomeTags] = useState([
    { id: 8, name: '工资', sign: '￥', category: 'income' },
    { id: 9, name: '彩票', sign: '￥', category: 'income' },
    { id: 10, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 11, name: '彩票', sign: '￥', category: 'income' },
    // { id: 18, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 17, name: '彩票', sign: '￥', category: 'income' },
    // { id: 19, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 4, name: '工资', sign: '￥', category: 'income' },
    // { id: 5, name: '彩票', sign: '￥', category: 'income' },
    // { id: 6, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 11, name: '彩票', sign: '￥', category: 'income' },
    // { id: 18, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 17, name: '彩票', sign: '￥', category: 'income' },
    // { id: 19, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 4, name: '工资', sign: '￥', category: 'income' },
    // { id: 5, name: '彩票', sign: '￥', category: 'income' },
    // { id: 6, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 11, name: '彩票', sign: '￥', category: 'income' },
    // { id: 18, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 17, name: '彩票', sign: '￥', category: 'income' },
    // { id: 19, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 4, name: '工资', sign: '￥', category: 'income' },
    // { id: 5, name: '彩票', sign: '￥', category: 'income' },
    // { id: 6, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 11, name: '彩票', sign: '￥', category: 'income' },
    // { id: 18, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 17, name: '彩票', sign: '￥', category: 'income' },
    // { id: 19, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 4, name: '工资', sign: '￥', category: 'income' },
    // { id: 5, name: '彩票', sign: '￥', category: 'income' },
    // { id: 6, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 11, name: '彩票', sign: '￥', category: 'income' },
    // { id: 18, name: '滴滴', sign: '￥', category: 'income' },
    // { id: 17, name: '彩票', sign: '￥', category: 'income' },
    // { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  ])
  const iconSlot = <Icon name='left' />
  const mainSlot = <div className="fuck">
    <MainSlotWrapper>
      <Tabs selected={selected} onClick={onTabChange} className='tabs' >
        <Tab name='支出' className='tags_wrapper'>
          <div className="tag">
            <div className="sign">
              <Icon name="add" className="createTag" />
            </div>
            <div className="name">
              新增
            </div>
          </div>
          {expenseTag.map(tag =>
            <div className='tag selected' key={tag.id}>
              <div className="sign">
                {tag.sign}
              </div>
              <div className="name">
                {tag.name}
              </div>
            </div>
          )}
        </Tab>
        <Tab name='收入' className='tags_wrapper'>
          <div className="tag">
            <div className="sign">
              <Icon name="add" className="createTag" />
            </div>
            <div className="name">
              新增
            </div>
          </div>
          {incomeTags.map(tag =>
            <div className='tag selected' key={tag.id}>
              <div className="sign">
                {tag.sign}
              </div>
              <div className="name">
                {tag.name}
              </div>
            </div>
          )}
        </Tab>
      </Tabs>
      <InputPadWrapper>
        <InputPad />
      </InputPadWrapper>
    </MainSlotWrapper>
  </div>
  return (
    <MainPage title='记一笔' iconSlot={iconSlot} mainSlot={mainSlot} />
  )
}

const MainSlotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 88px);
  .icon{
    width:1.2em;
    height:1.2em;
  }
.tabs {
  display: flex;
  flex-wrap:wrap;
  flex-grow: 1;
  overflow: auto;
  margin-top:16px;
}

.tags_wrapper {
  display: flex;
  flex-wrap: wrap;
  padding-top: 16px;
}
.createTag {
  fill: var(--main);
}
.tag {
  position: relative;
  width: 20vw;
  height: calc(20vw * 1.14);
  display: flex;
  flex-direction: column;
  align-items: center;
  .sign {
    width: 12vw;
    height: 12vw;
    background: var(--tag-bg);
    border: 1px solid var(--tag-bg);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .name {
    font-size: 12px;
    margin-top: 4px;
  }
  &.selected {
    .sign {
      border-color: var(--main);
    }
  }
}
`
const InputPadWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`

