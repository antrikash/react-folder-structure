import React, { useState, createContext } from "react";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const ContextT = createContext({});
export const TodoContext = (props) => {
  const initialState = [
    { id: "1", title: "Buy Grocery", completed: true },
    { id: "2", title: "Pay Utility Bills", completed: false },
    { id: "3", title: "Vehicle Service", completed: false },
    { id: "4", title: "Shopping", completed: false },
    { id: "5", title: "Buy Books", completed: false }
  ];

  const initialCompletedArray: Todo[] = initialState.filter(
    (item) => item.completed === true
  );

  const [todoList, setTodoList] = useState(initialState);

  return (
    <ContextT.Provider value={{ todoList, setTodoList }}>
      {props.children}
    </ContextT.Provider>
  );
};
