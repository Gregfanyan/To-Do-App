import React, { useState } from "react";
import classNames from "classnames";
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

  const buttonClasses = classNames({
    header__addTodo: true,
    header__enabled: openSideBar,
  });

  return (
    <div className="header">
      <div className="header__menu">
        <h1>To Do List</h1>
        <button onClick={openToSideBar} type="button">
          Add new To Do
        </button>
      </div>
      <div className={buttonClasses}>
        <SIdeBarForm
          hideSideBar={hideSideBar}
          setOpenSideBar={setOpenSideBar}
        />
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default Home;
