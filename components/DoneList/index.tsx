import React from 'react'
import DoneItem from '../DoneItem'

type Item = {
  id: number
  body: string
  isDone: boolean
}

type Props = {
  items: Item[]
}

const DoneList: React.FC<Props> = ({ items }) => (
  <>
    {items &&
      items.map(item => (
        <DoneItem
          id={item.id}
          body={item.body}
          isDone={item.isDone}
          setBody={() => {}}
        />
      ))}
  </>
)

export default DoneList
