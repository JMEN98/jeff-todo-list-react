import react from "react";
import { useState,useEffect } from "react";
import From from "./components/From";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {

  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [fillerTodos,setFillerTodos]=useState([])

  useEffect(()=>{

filterHandler()

  },[todos,status])

  const filterHandler=()=>{
   switch(status){
    case'completd':
    setFillerTodos(todos.filter(todos=>todos.completed===true))
   
   break
   case'uncompletd':
   setFillerTodos(todos.filter(todos=>todos.completed===false))
  
  break
  default:
    setFillerTodos(todos)
    break
  }
}
  return (
    <div className="App">
      <header>
        <h1>jeffs todo-list</h1>
      </header>
      <From
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList todos={todos} setTodos={setTodos} fillerTodos={fillerTodos} />
    </div>
  );
}

export default App;
