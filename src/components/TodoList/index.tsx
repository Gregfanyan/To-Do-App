import React from "react";

import Todo from "../Todo";
import { TodoProps } from "../../types/ui";
import "./todoList.scss";

function TodoList({ todos, setTodos }: TodoProps) {
  return (
    <div
      className={
        todos && todos.length > 5 ? "todo-wrapper-grid" : "todo-wrapper-flex"
      }
    >
      {todos &&
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  );
}

export default TodoList;
