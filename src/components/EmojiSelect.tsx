import { useState } from "react"
import styled from "styled-components"
import { emojiList } from "../shared/emojiList"

type Props = {
  value: string
  onClickEmoji: (emoji: string) => void
}

export const EmojiSelect: React.FC<Props> = (props) => {
  const { onClickEmoji } = props
  const [selected, setSelected] = useState(0)
  const table: [string, string[]][] = [
    ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
      'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
      'face-glasses', 'face-concerned', 'face-negative', 'face-costume'
    ]],
    ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
      'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
    ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
      'person-activity', 'person-sport', 'person-resting']],
    ['衣服', ['clothing']],
    ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
      'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
    ['植物', ['plant-flower', 'plant-other']],
    ['自然', ['sky & weather', 'science']],
    ['食物', [
      'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
      'food-marine', 'food-sweet'
    ]],
    ['运动', ['sport', 'game']],
  ]

  const emojis = () => {
    const selectedItem = table[selected][1]
    return selectedItem.map(category =>
      emojiList.find(item => item[0] === category)?.[1]
        .map(item => <li key={item} onClick={() => { onClickEmoji(item) }}>{item}</li>)
    )
  }


  const onClick = (index: number) => { setSelected(index) }
  return (
    <EmojiListWrapper >
      <nav>
        {table.map((item, index) =>
          <span
            key={item[0]}
            onClick={() => { onClick(index) }}
            className={index === selected ? 'selected' : ""}
          >
            {item[0]}
          </span>
        )}
      </nav>
      <ol>
        {emojis()}
      </ol>
    </EmojiListWrapper>
  )
}

const EmojiListWrapper = styled.div`
  flex-grow: 1;
  border: 1px solid var(--input-border-color);
  border-radius: var(--input-radius);
  font-size: 18px;
  font-size: 14px;
  &.error {
    border-color: var(--error-color);
  }
  > nav {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    padding: 0 4px;
    &::-webkit-scrollbar {
      display: none;
    }
    > span {
      flex-shrink: 0;
      display: inline-block;
      padding: 8px;
      color: var(--emoji-nav-text);
      &.selected {
        color: var(--emoji-nav-text-selected);
      }
    }
  }
  > ol {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    font-size: 22px;
    line-height: 32px;
    height: calc(32px * 12);
    overflow: auto;
    padding: 0 4px;
    &::-webkit-scrollbar {
      display: none;
    }
    > li {
      flex-shrink: 0;
      flex-grow: 0;
      width: 10%;
      text-align: center;
    }
  }
`

