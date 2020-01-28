import React from 'react'
import './style.css'

type Props = {
  id: number
  body: string
  isDone: boolean
  setBody(id: number, event: React.FormEvent): void
}

const DoneItem: React.FC<Props> = props => (
  <div className="container">
    <input type="checkbox" checked={props.isDone} />
    <div>{props.body}</div>
  </div>
)

export default DoneItem
