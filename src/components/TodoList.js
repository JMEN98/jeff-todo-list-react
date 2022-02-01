import react from "react";
import Todo from "./Todo.js";
function TodoList({ todos,setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-List">
        {todos.map((todo) => (
          <Todo text={todo.text}  todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
