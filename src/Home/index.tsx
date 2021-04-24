import React, { useState, useEffect } from "react";
import classNames from "classnames";
import SIdeBarForm from "../components/SideBarForm";
import Todo from "../components/Todo";
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

  const statusHandler = (e: any) => {
    setStatus(e.target.value);
  };

  return (
    <div className="header">
      <div className="header__menu">
        <h1>To Do List</h1>
        <button onClick={openToSideBar} type="button">
          <i className="fa fa-plus"></i>
          Add new To Do
        </button>
      </div>

      {todos && (
        <select onChange={statusHandler} name="todos">
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="inProgress">In progress</option>
        </select>
      )}
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
      <div>
        <Todo setTodos={setTodos} todos={filteredTodo} />
      </div>
    </div>
  );
}

export default Home;
