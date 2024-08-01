import React from 'react'
import Todo from './Todo'

export default function TodoList( props ) {

  return (
    <ul className='todo-container'>
      {props.todos.toReversed().map( (todo) => {
        //needs a key for each component
        return <Todo key = {todo.id} 
                handleRemoveTodo= {() => props.handleDeleteTodo(todo.id)} 
                handleUpdateTodo = {props.handleUpdateTodo} 
                todo = {todo} />
      })}
    </ul>
  )
}
