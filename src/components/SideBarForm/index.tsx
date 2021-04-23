import React from "react";
function SideBarForm({ hideSideBar, setOpenSideBar }: any) {
  function addTodo() {
    setOpenSideBar(false);
  }

  return (
    <div>
      <form>
        <button id="cancelButton" onClick={hideSideBar}>
          <i className="fas fa-times-circle"></i>
        </button>
        <input type="text" required placeholder="Todo Title" />
        <textarea placeholder="Todo Desciption" />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default SideBarForm;
