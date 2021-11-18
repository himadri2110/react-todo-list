import React from "react";

const Form = ({ inputText, setInputText, setTodos, todos }) => {
  const inputHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input type="text" value={inputText} required onChange={inputHandler} />
      <button type="submit" onClick={submitTodoHandler}>
        Add
      </button>
    </form>
  );
};

export default Form;
