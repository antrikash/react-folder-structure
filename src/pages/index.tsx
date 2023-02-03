import { FC } from "react";
import { useHistory } from "react-router-dom";
import TodoList from "../domain/todo/components/todo-list";

import styles from "./../domain/todo/components/todo-list/todo-list.module.scss";

const Index: FC = (props) => {
  const history = useHistory();

  const handleBtn = () => {
    history.push("/completed-list");
  };
  return (
    <div className={styles.root}>
      <TodoList />
      <button className={styles.button} onClick={handleBtn}>
        Completed Item List
      </button>
    </div>
  );
};

export default Index;
