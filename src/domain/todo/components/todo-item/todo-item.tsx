import { FC } from "react";
import { Icon } from "../../../../components/icon/icon";
import { Todo } from "../../type/todo";
import styles from "./todo-item.module.scss";
import classnames from "classnames";

interface TodoItemProps {
  todo: Todo;
  onCheck?: () => void;
  onDelete?: () => void;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, onCheck, onDelete }) => {
  return (
    <div className={styles.root}>
      <button className="check" onClick={onCheck}>
        <Icon
          icon={todo.completed ? "checkbox-checked" : "checkbox-unchecked"}
        />
      </button>

      <div
        className={classnames([
          styles.text,
          todo.completed && styles.completed
        ])}
      >
        {todo.title}
      </div>

      <button className="delete" onClick={onDelete}>
        <Icon icon="bin" color="#E83820" />
      </button>
    </div>
  );
};
