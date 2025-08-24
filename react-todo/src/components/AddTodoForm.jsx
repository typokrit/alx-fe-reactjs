import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add-todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo"
        data-testid="todo-input"
        className="border p-2 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
