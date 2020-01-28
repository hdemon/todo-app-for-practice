import React, { useState, useEffect } from 'react'
import TodoList from '../components/TodoList'
import DoneList from '../components/DoneList'

const defaultItems = [
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
  const [items, setItems] = useState<Item[]>(defaultItems)

  return (
    <>
      <TodoList items={items.filter(item => !item.isDone)} />
      <DoneList items={items.filter(item => item.isDone)} />
    </>
  )
}

export default Home
