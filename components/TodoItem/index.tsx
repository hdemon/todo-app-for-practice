import React from 'react'
import './style.css'

type Props = {
  id: number
  body: string
  isDone: boolean
  setIsDone(): void
  setBody(id: number, event: React.FormEvent): void
}

const TodoItem: React.FC<Props> = props => (
  <div className="container">
    <input type="checkbox" checked={props.isDone} onChange={props.setIsDone} />
    <div
      contentEditable="true"
      // contentEditableが付与できる要素にはonchangeがあるとは限らない。input Eventはcontenteditable=trueである要素に存在することが保証されているのでそれを使う。
      // https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/input_event
      // TODO: onchangeとoninputの違いを調べて書く。
      onInput={event => props.setBody(props.id, event)}
    >
      {props.body}
    </div>
  </div>
)

export default TodoItem

// Content Editable
