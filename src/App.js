import react from 'react';
import { useState } from 'react';
import From from './components/From';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputText,setInputText]=useState("")
  const [todos,setTodos]=useState([])
  return (
    <div className="App">
      <header>
        <h1>
          jeffs todo-list
          
        </h1>
      </header>
        <From   inputText={inputText} todos={todos}  setTodos={setTodos} setInputText={setInputText}/>
        <TodoList todos={todos} setTodos={setTodos}  />

    </div>
  );
}

export default App;
