import React from "react";
import "./todoList.scss";

function TodoList({ todos, setTodos, todo }: any) {
  const { title, description, done, date, id } = todo;

  const deleteHandler = () => {
    setTodos(todos.filter((item: any) => item.id !== id));
  };

  const completeHandler = () => {
    return setTodos(
      todos.map((item: any) => {
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
