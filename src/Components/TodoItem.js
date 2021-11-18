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
    <li style={todo.completed ? completedStyle : null} key={todo.id}>
      {todo.text}
      <button onClick={() => todoComplete(todo)}>Done</button>
      <button onClick={() => todoDelete(todo)}>Delete</button>
    </li>
  ));

  return <div>{todoComponent}</div>;
};

export default TodoItem;
