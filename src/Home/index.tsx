import React, { useState } from "react";

import SIdeBarForm from "../components/SideBarForm";
import Todo from "../components/Todo";
import "./home.scss";

function Home() {
  const [openSideBar, setOpenSideBar] = useState<boolean | undefined>(false);

  function openToSideBar() {
    setOpenSideBar(true);
  }

  function hideSideBar(e: React.FormEvent<EventTarget>): void {
    e.preventDefault();
    setOpenSideBar(false);
  }

  return (
    <div>
      <div className="header-menu">
        <h1>To Do List</h1>
        <button onClick={openToSideBar} type="button">
          Add new To Do
        </button>
      </div>
      <div id="addTodo" className={openSideBar ? "enabled" : null}>
        <SIdeBarForm hideSideBar={hideSideBar} setOpenSideBar ={setOpenSideBar} />
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default Home;
