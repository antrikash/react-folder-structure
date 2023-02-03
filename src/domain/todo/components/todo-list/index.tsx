import { FC } from "react";
import { useTodoList } from "./hooks/use-todo-list";
import { TodoList } from "./todo-list";

const TodoListContainer: FC = (props) => {
  return <TodoList {...useTodoList()} />;
};

export default TodoListContainer;
