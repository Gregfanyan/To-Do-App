import React from "react";
import classNames from "classnames";

import { TodoListProps } from "../../types/ui";
import "./todoList.scss";

function TodoList({ todos, setTodos, todo }: TodoListProps) {
  const { title, description, isDone, date, id } = todo;

  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: true };
        }
        return item;
      })
    );
  };

  const completedButtonClasses = classNames({
    "todo-wrapper__completedBtn": true,
    "todo-wrapper__completedBtnMarked": isDone,
  });

  const todoTitleClasses = classNames({
    "todo-wrapper__title": true,
    "todo-wrapper__completed": isDone,
  });

  const todoDescriptionClasses = classNames({
    "todo-wrapper__description": true,
    "todo-wrapper__completed": isDone,
  });

  return (
    <>
      {todo && (
        <div className="todo-wrapper">
          <div className="todo-wrapper__title-section">
            <button
              onClick={completeHandler}
              className={completedButtonClasses}
            >
              <i className="fas fa-check"></i>
            </button>
            <div className="todo-wrapper__date"> &nbsp;{date}</div>
            <div className={todoTitleClasses}>{title}</div>
            <button onClick={deleteHandler} className="todo-wrapper__deleteBtn">
              <i className="fa fa-remove fa-lg"></i>
            </button>
          </div>
          <div className="todo-wrapper__description-section">
            <div className={todoDescriptionClasses}>{description}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoList;
