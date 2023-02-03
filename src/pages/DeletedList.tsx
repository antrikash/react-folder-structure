import { FC, useContext } from "react";
import { ContextT } from "../context/TodoContext";

import styles from "./../domain/todo/components/todo-list/todo-list.module.scss";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
const DeletedList: FC = () => {
  const data = useContext(ContextT);
  const { todoList } = data;
  console.log(todoList, "ppopo");

  const handleList = () => {
    return todoList.map((elem: []) => {
      return elem?.completed === true ? (
        <ol key={elem?.id}>{elem?.title}</ol>
      ) : (
        []
      );
    });
  };

  return (
  <div>
    <h1 style={{fontSize: '100px', fontWeight: 'bold', textDecorationLine: 'underline', justifyContent: 'center', alignContent: 'center'}}>Completed List</h1>
    {handleList()}
    </div>
  )
};

export default DeletedList;
