import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import TodoItem from "./Components/TodoItem";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run everytime there is change in todos or status (filter todos)
  useEffect(() => {
    const filterHandler = () => {
      if (status === "completed")
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
      else if (status === "pending")
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
      else setFilteredTodos(todos);
    };

    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <Header />

      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />

      <TodoItem
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />

      <Footer />
    </div>
  );
};

export default App;
