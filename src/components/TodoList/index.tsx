import React from "react";
import "./todoList.scss";

function TodoList({ todos, setTodos, todo }: any) {
  const { title, description, done, date, id } = todo;

  return (
    <div>
      {todo && (
        <div>
          <div>{title}</div>
          <div>{description}</div>
          <div>{date}</div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
