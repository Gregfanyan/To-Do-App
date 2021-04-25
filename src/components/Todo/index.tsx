import React from "react";

import TodoList from "../TodoList";
import { TodoProps } from "../../types/ui";
import './todo.scss'

function Todo({ todos, setTodos }: TodoProps) {
  return (
    <div className='todo-Wrapper'>
      {todos &&
        todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
    </div>
  );
}

export default Todo;
