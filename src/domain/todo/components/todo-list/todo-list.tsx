import { FC, createContext } from "react";
import { Todo } from "../../type/todo";
import TodoItem from "../todo-item";
import styles from "./todo-list.module.scss";
// import DeletedList from "../../../../pages/DeletedList";

interface TodoListProps {
  todos: Todo[];
  toggleStatus: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  completedListData: Todo[];
}

export const TodoList: FC<TodoListProps> = ({
  todos,
  toggleStatus,
  deleteTodo,
  completedListData
}) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Today's Todos</h2>
      {todos.map((todo) => (
        <div className={styles.item} key={todo.id}>
          <TodoItem
            todo={todo}
            onCheck={() => toggleStatus(todo)}
            onDelete={() => deleteTodo(todo)}
          />
        </div>
      ))}
    </div>
  );
};
