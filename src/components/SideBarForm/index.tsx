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

  const addTodo = (e: any) => {
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
