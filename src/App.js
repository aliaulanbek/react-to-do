import TodoList from './components/TodoList';
import React, { useState,  useEffect} from 'react';
import {v4 as uuidv4 } from 'uuid'
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("HOLD_TODO_LIST")) || []
  });

  // const todoNameRef = useRef();

  useEffect( () => {
    window.localStorage.setItem("HOLD_TODO_LIST", JSON.stringify(todos));
  }, [todos])


  function handleAddTodo(name) {
    setTodos( prevTodos => [...prevTodos, { id: uuidv4(), name: name, complete: false}])
  }

  function handleUpdateTodo(id, name) {
    setTodos( prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, name: name } : todo)))
  }


  function handleDeleteTodo(id) {
    setTodos( t => t.filter( (todo) => todo.id !== id));
  }

  return (
    <>
      <h1 className = 'title'>TO-DO List</h1>
      <div className = "form">
        <TodoForm editing = {false} handleAddTodo={handleAddTodo}/>
        <TodoList handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} todos={todos}/>
      </div>
    
    </>
  );
}

export default App;