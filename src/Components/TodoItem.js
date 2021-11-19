import React from "react";

const TodoItem = ({ todos, setTodos }) => {
  const completedStyle = {
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  function todoComplete(todo) {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !todo.completed,
          };
        }
        return el;
      })
    );
  }

  function todoDelete(todo) {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  const todoComponent = todos.map((todo) => (
    <div className="todo">
      <li
        style={todo.completed ? completedStyle : null}
        key={todo.id}
        className="todo-item"
      >
        {todo.text}
      </li>
      <button onClick={() => todoComplete(todo)} className="check">
        <i className="fa fa-check"></i>
      </button>
      <button onClick={() => todoDelete(todo)} className="delete">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  ));

  return (
    <div className="todo-container">
      <ul className="todo-list">{todoComponent}</ul>
    </div>
  );
};

export default TodoItem;
