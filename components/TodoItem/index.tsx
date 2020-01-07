import React from 'react'
import './style.css'

type Props = {
  id: number
  body: string
  isDone: boolean
  setBody(id: number, event: React.ChangeEvent): void
}

const TodoItem: React.FC<Props> = props => (
  <div className="container">
    <input type="checkbox" checked={props.isDone} />
    <textarea onChange={event => props.setBody(props.id, event)}>
      {props.body}
    </textarea>
  </div>
)

export default TodoItem
