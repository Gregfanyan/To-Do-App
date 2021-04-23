import React from "react";
import TodoList from "../TodoList";
function Todo({ todos, setTodos }: any) {
  return (
    <div>
      {todos &&
        todos.map((todo: any) => (
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
