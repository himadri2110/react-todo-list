import React, { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import TodoItem from "./Components/TodoItem";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />

      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
      />

      <TodoItem todos={todos} setTodos={setTodos} />

      <Footer />
    </div>
  );
};

export default App;
