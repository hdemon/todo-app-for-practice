import React from 'react'
import TodoItem from '.'

export default { title: 'TodoItem' }

export const empty = () => (
  <TodoItem id={1} body="test" isDone={false} setBody={() => {}} />
)
