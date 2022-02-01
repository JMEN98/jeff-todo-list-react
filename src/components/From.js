import react from "react";

function From({ inputText,setInputText,todos,setTodos,setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
     console.log(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {text:inputText,completed:false, id:Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandle =(e)=>{
    setStatus(e.target.target)

  }
  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="todp-input"
      />
      <button
        onClick={submitTodoHandler}
        className="todo-button "
        type="submit"
      >
        {" "}
        <i className="fas fa-plus-square"> </i> enter
      </button>
      <div className="select">
        <select onChange={statusHandle} name="todos" className="filter-Todos">
          <option value="all"> All</option>
          <option value="completed"> Completed</option>
          <option value="uncompleted"> uncompleted</option>
        </select>
      </div>
    </form>
  );
}
export default From;
