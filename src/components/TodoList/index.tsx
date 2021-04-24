import React from "react";
import classNames from "classnames";

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

  const buttonClasses = classNames({
    "todo-wrapper__completedBtn": true,
    "todo-wrapper__completedBtnMarked": done,
  });

  return (
    <div>
      {todo && (
        <div className="todo-wrapper">
          <div className="todo-wrapper__todo-title-date">
            <button onClick={completeHandler} className={buttonClasses}>
              <i className="fas fa-check"></i>
            </button>
            <div
              className={
                done === false
                  ? "todo-wrapper__title"
                  : "todo-wrapper__completed"
              }
            >
              {title}
            </div>
            <div>Created at: {date}</div>
          </div>
          <div className="todo-wrapper__description-wrapper">
            <div className={done === false ? "todo-wrapper__description" : "todo-wrapper__completed"}>
              {description}
            </div>
            <button onClick={deleteHandler} className="todo-wrapper__deleteBtn">
              <i className="far fa-trash-alt fa-lg"></i>
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
