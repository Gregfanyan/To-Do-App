import React, { useState, useEffect } from "react";
import classNames from "classnames";

import SIdeBarForm from "../components/SideBarForm";
import Todo from "../components/Todo";
import Select from "../components/Select";
import "./home.scss";

function Home() {
  const [openSideBar, setOpenSideBar] = useState<boolean | undefined>(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);

  const openToSideBar = () => {
    setOpenSideBar(true);
  };

  const hideSideBar = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    setOpenSideBar(false);
  };

  const buttonClasses = classNames({
    header__addTodo: true,
    header__enabled: openSideBar,
  });

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  useEffect(() => {
    switch (status) {
      case "done":
        setFilteredTodo(todos.filter((todo) => todo.done === true));
        break;
      case "inProgress":
        setFilteredTodo(todos.filter((todo) => todo.done === false));
        break;
      default:
        setFilteredTodo(todos);
    }
  }, [todos, status]);

  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      <div className="header">
        <div className="header__menu">
          <h1>To Do List</h1>
          <div className="header__select-wrapper">
            {todos.length > 0 && <Select statusHandler={statusHandler} />}
          </div>
          <button
            onClick={openToSideBar}
            type="button"
            className="header__showSidebarBtn"
          >
            <i className="fa fa-plus fa-2x"></i>
            Add New To Do
          </button>
        </div>

        <div className={buttonClasses}>
          <SIdeBarForm
            hideSideBar={hideSideBar}
            setOpenSideBar={setOpenSideBar}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div className="header__todoContainer">
          <Todo setTodos={setTodos} todos={filteredTodo} />
        </div>
      </div>
    </>
  );
}

export default Home;
