import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import TodoForm from './TodoForm'

export default function Todo( {todo, handleUpdateTodo, handleRemoveTodo, toggleTodo}) {
  const [editing, setEditing] = useState(false);
  const [todoClass, setTodoClass] = useState("todo-incomplete")


  function startEdit() {
    setEditing(true);
  }

  function stopEdit(newName) {
    setEditing(false);
    handleUpdateTodo(todo.id, newName);
  }

  const changeStyle = () => {
    toggleTodo()
    todo.complete ? setTodoClass('todo-complete') : setTodoClass('todo-incomplete');
  }

  return (
    <>
    {
      editing ? 
      <TodoForm editing={true} initialVal = {todo.name} handleUpdateTodo={stopEdit} />
      :
      <li className={todoClass} >
        <div>
          <input type='checkbox' onChange={changeStyle}/>
          <span className='todo-text'>{todo.name}</span>
        </div>

        <div className='icons'>
          <FontAwesomeIcon className='icon-edit' icon={faPenToSquare}  onClick={() => startEdit()}/>
          <FontAwesomeIcon icon={faTrash} onClick={handleRemoveTodo}/>
        </div>
      </li>
    }
    </>
  )
}
