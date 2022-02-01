import react from "react";
import Todo from "./Todo.js";
function TodoList({ todos,setTodos,fillerTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-List">
        {fillerTodos.map((todo) => (
          <Todo text={todo.text}  todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
