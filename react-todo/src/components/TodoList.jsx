import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Write Todo App", completed: true },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <AddTodoForm addTodo={addTodo} />

      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-2 border mb-2 rounded flex justify-between items-center ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              data-testid={`todo-text-${todo.id}`}
              style={{ cursor: "pointer" }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              data-testid={`delete-btn-${todo.id}`}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
