import React from "react";

import { selectProps } from "../../types/ui";

function Select({ statusHandler }: selectProps) {
  
  return (
    <select onChange={statusHandler} name="todos">
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="inProgress">In progress</option>
    </select>
  );
}

export default Select;
