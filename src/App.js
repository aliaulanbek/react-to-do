import TodoList from './components/TodoList';
import React, { useState, useRef, useEffect} from 'react';
import {v4 as uuidv4 } from 'uuid'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("HOLD_TODO_LIST")) || []
  });

  const todoNameRef = useRef();

  useEffect( () => {
    window.localStorage.setItem("HOLD_TODO_LIST", JSON.stringify(todos));
  }, [todos])


  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return ;

    setTodos( prevTodos => [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    )
    // resets value in input
    todoNameRef.current.value = null;
  }

  return (
    <>
      <h1 class = 'title'>TO-DO List</h1>
      <div class = "form">
        <input ref = {todoNameRef} type= 'text' placeholder='Enter to-do...'></input>
        <button class = 'addTodo' onClick={handleAddTodo}>ADD</button>
        <TodoList todos={todos}/>
      </div>
    
    </>
  );
}

export default App;
