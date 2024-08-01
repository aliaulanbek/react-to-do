import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import TodoForm from './TodoForm'

export default function Todo( {todo, handleUpdateTodo, handleRemoveTodo}) {
  const [editing, setEditing] = useState(false);

  function startEdit() {
    setEditing(true);
  }

  function stopEdit(newName) {
    setEditing(false);
    handleUpdateTodo(todo.id, newName);
  }

  return (
    <>
    {
      editing ? 
      <TodoForm editing={true} initialVal = {todo.name} handleUpdateTodo={stopEdit} />
      :
      <li className='todo'>
        <div className='todoName'>{todo.name}</div>
        <div className='icons'>
          <FontAwesomeIcon className='icon-edit' icon={faPenToSquare}  onClick={() => startEdit()}/>
          <FontAwesomeIcon icon={faTrash} onClick={handleRemoveTodo}/>
        </div>
      </li>
    }
    </>
    
  )
}
