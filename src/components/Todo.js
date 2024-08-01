import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export default function Todo(props) {
  return (
    <>
    <li className='todo'>
      <div className='todoName'>{props.todo.name}</div>
      <div className='icons'>
        <FontAwesomeIcon className='icon-edit' icon={faPenToSquare}  onClick={() => props.handleRemoveTodo(props.key)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => props.handleRemoveTodo(props.key)}/>
      </div>
    </li>
    </>
    
  )
}
