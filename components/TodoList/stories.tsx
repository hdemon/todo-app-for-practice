import React from 'react'
import TodoList from '../TodoList'

const items = [
  {
    body: 'foo',
    isDone: false,
  },
  {
    body: 'bar',
    isDone: true,
  },
]

export default { title: 'TodoList' }

export const normal = () => <TodoList items={items} />
