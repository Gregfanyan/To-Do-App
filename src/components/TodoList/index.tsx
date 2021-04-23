import React from "react";
import "./todoList.scss";

function TodoList({ todos, setTodos, todo }: any) {
  const { title, description, done, date, id } = todo;

  const deleteHandler = () => {
    setTodos(todos.filter((item: any) => item.id !== id));
  };

  return (
    <div>
      {todo && (
        <div>
          <div>{title}</div>
          <div>{description}</div>
          <div>{date}</div>
        </div>
      )}
      <button onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoList;
