import React, { useState } from 'react'
import TodoList from '../components/TodoList'

const items = [
  {
    id: 1,
    body: 'foo',
    isDone: false,
  },
  {
    id: 2,
    body: 'bar',
    isDone: true,
  },
]

const Home = () => {
  const [items, setItems] = useState<Item[]>([])

  return (
    <>
      <TodoList items={items} />
    </>
  )
}

export default Home
