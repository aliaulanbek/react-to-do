import TodoList from './components/TodoList';
import React, { useState,  useEffect} from 'react';
import {v4 as uuidv4 } from 'uuid'
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState( () => { return JSON.parse(localStorage.getItem("HOLD_TODO_LIST")) ||  [] });

  // persists todo list in local storage
  useEffect( () => {
    window.localStorage.setItem("HOLD_TODO_LIST", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(name) {
    setTodos( prevTodos => [...prevTodos, { id: uuidv4(), name: name, complete: false}]);
  }

  function handleUpdateTodo(id, updatedName) {
    setTodos( prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, name: updatedName } : todo)));
  }

  function handleDeleteTodo(id) {
    setTodos( t => t.filter( (todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
  }

  function clearComplete() {
    setTodos( t => t.filter( (todo) => todo.complete !== true ))
  }

  return (
    <>
      <div className = "everything"> 
        <h1 className = 'title'>Todo List</h1>
        <div className = "form">
          <TodoForm editing = {false} handleAddTodo={handleAddTodo}/>
          <TodoList handleDeleteTodo={handleDeleteTodo} 
                    handleUpdateTodo={handleUpdateTodo} 
                    toggleTodo={toggleTodo} 
                    todos={todos} 
                    />
          <button className='clear-completed' onClick={clearComplete}>Clear Completed</button>
        </div>
      </div>
    </>
  );
}

export default App;