import React from 'react'
import Todo from './Todo'

export default function TodoList({todos}) {

  function handleRemoveTodo(index) {
    
  }

  return (
    <ul className='todo-container'>
      {todos.toReversed().map( (todo, i) => {
        //needs a key for each component
        return <Todo handleRemoveTodo= {handleRemoveTodo} key = {todo.id} todo = {todo}/>
      })}
    </ul>
  )
}
