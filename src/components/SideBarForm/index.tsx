import React from "react";

import { SideBarFormProps } from "../../types/ui";
import "./sideBarForm.scss";

function SideBarForm({
  hideSideBar,
  setOpenSideBar,
  title,
  setTitle,
  description,
  setDescription,
  todos,
  setTodos,
}: SideBarFormProps) {
  const titleOnChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTitle(e.target.value);
  };

  const descriptionOnChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setDescription(e.target.value);
  };

  const addTodo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (description && title) {
      setTodos([
        ...todos,
        {
          title: title,
          description: description,
          done: false,
          id: Math.random() * 100000,
          date: new Date().toLocaleDateString(),
        },
      ]);
    } else {
      alert("please, fill in the input");
    }
    setDescription("");
    setTitle("");
    setOpenSideBar(false);
  };

  return (
    <div className="todo-form-wrapper">
      <form>
        <button
          className="todo-form-wrapper__cancelButton"
          onClick={hideSideBar}
        >
          <i className="fas fa-times-circle fa-2x"></i>
        </button>
        <input
          type="text"
          required
          placeholder="Todo Title"
          onChange={titleOnChangeHandler}
        />
        <textarea
          required
          placeholder="Todo Desciption"
          onChange={descriptionOnChangeHandler}
        />
        <button
          type="submit"
          onClick={addTodo}
          className="todo-form-wrapper__addTodo"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default SideBarForm;
