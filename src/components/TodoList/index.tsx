import React from "react";

import { TodoListProps } from "../../types/ui";
import "./todoList.scss";

function TodoList({ todos, setTodos, todo }: TodoListProps) {
  const { title, description, done, date, id } = todo;

  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const completeHandler = () => {
    return setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };

  return (
    <div>
      {todo && (
        <div className={done === false ? null : "completed"}>
          <div>{title}</div>
          <div>{description}</div>
          <div>{date}</div>
        </div>
      )}
      <button onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
      <button onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
    </div>
  );
}

export default TodoList;
