import React from "react";

const Form = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  // Set state of input text
  const inputHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  // Set state of todos
  const submitTodoHandler = (e) => {
    if (inputText !== "") {
      e.preventDefault();

      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
  };

  // Set state of selected option
  const selectHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={inputText} required onChange={inputHandler} />

        <button type="submit" onClick={submitTodoHandler}>
          Add
        </button>
      </form>

      <div className="select">
        <select className="filter" onChange={selectHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
