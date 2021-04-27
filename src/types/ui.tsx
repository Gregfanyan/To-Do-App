export type todo = {
  date: string;
  title: string;
  description: string;
  id: string;
  isDone: boolean;
};

export type selectProps = {
  statusHandler: React.ChangeEventHandler<HTMLSelectElement>;
};

export type SideBarFormProps = {
  hideSideBar: React.MouseEventHandler<HTMLButtonElement>;
  setOpenSideBar: Function;
  title: string;
  setTitle: Function;
  description: string;
  setDescription: Function;
  todos: todo[];
  setTodos: Function;
};

export type TodoProps = {
  todos: todo[];
  setTodos: Function;
};

export type TodoListProps = {
  todos: todo[];
  setTodos: Function;
  todo: todo;
};
