import React from 'react'
import TodoItem from '../TodoItem'

type Item = {
  id: number
  body: string
  isDone: boolean
}

type Props = {
  items: Item[]
}

const TodoList: React.FC<Props> = ({ items }) => (
  <>
    {items.map(item => (
      <TodoItem
        id={item.id}
        body={item.body}
        isDone={item.isDone}
        setBody={() => {}}
      />
    ))}
  </>
)

export default TodoList
