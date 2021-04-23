import React from "react";
function SideBarForm({
  hideSideBar,
  setOpenSideBar,
  title,
  setTitle,
  description,
  setDescription,
  todos,
  setTodos,
}: any) {
  const addTodo = () => {
    setOpenSideBar(false);
  };

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

  return (
    <div>
      <form>
        <button id="cancelButton" onClick={hideSideBar}>
          <i className="fas fa-times-circle"></i>
        </button>
        <input
          type="text"
          required
          placeholder="Todo Title"
          onChange={titleOnChangeHandler}
        />
        <textarea
          placeholder="Todo Desciption"
          onChange={descriptionOnChangeHandler}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default SideBarForm;
