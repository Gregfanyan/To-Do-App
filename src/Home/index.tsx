import React, { useState, useEffect } from "react";
import classNames from "classnames";

import SIdeBarForm from "../components/SideBarForm";
import TodoList from "../components/TodoList";
import Select from "../components/Select";
import "./home.scss";
import { todo } from "../types/ui";

function Home() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState<todo[]>([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState<todo[]>([]);

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
        setFilteredTodo(todos.filter((todo) => todo.isDone));
        break;
      case "inProgress":
        setFilteredTodo(todos.filter((todo) => !todo.isDone));
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
            {todos.length > 0 ? (
              <Select statusHandler={statusHandler} />
            ) : (
              <h1>No Todos</h1>
            )}
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
          <TodoList setTodos={setTodos} todos={filteredTodo} />
        </div>
      </div>
    </>
  );
}

export default Home;
