import React from "react";

const Form = ({ input, setInput, setTodos, todos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInput(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { input, complete: false, id: Math.random() * 1000 }]);
    setInput("");
    console.log(todos);
  };

  const getStatus = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={input}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={getStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;