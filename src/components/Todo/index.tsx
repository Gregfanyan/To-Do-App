import React, { useState } from "react";
import classNames from "classnames";

import { TodoListProps } from "../../types/ui";
import "./todo.scss";

function Todo({ todos, setTodos, todo }: TodoListProps) {
  const { title, description, isDone, date, id } = todo;
  const [titleInput, setTitleInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);

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
  const editBtnClasses = classNames({
    "todo-wrapper__pencilBtn": true,
    "todo-wrapper__completed": isDone,
  });

  const openTitleInputClick = () => {
    setIsClicked(!isClicked);
  };

  const changeTodoHandleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (titleInput) {
      setTodos(
        todos.map((item) => {
          if (item.id === id) {
            return { ...item, title: titleInput };
          }
          return item;
        })
      );
    }

    setIsClicked(false);
    setTitleInput("");
  };

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
            {!isClicked ? (
              <>
                <div className={todoTitleClasses}>{title}</div>
              </>
            ) : (
              <input
                onChange={(e) => setTitleInput(e.target.value)}
                defaultValue={title}
              />
            )}
            {!isClicked ? (
              <button
                onClick={openTitleInputClick}
                className={editBtnClasses}
                disabled={isDone}
              >
                <i className="fas fa-pencil-alt fa-lg"></i>
              </button>
            ) : (
              <button
                onClick={changeTodoHandleClick}
                className={editBtnClasses}
              >
                <i className="fas fa-pencil-alt fa-lg"></i>
              </button>
            )}
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

export default Todo;
