import { useCallback, useState, useContext } from "react";
import { ContextT } from "../../../../../context/TodoContext";
import { Todo } from "../../../type/todo";

export const useTodoList = () => {
  const { todoList, setTodoList } = useContext(ContextT);
  // todo list
  const data: Todo[] = todoList;

  const initialCompletedArray: Todo[] = data.filter(
    (item) => item.completed === true
  );

  const completedListData: Todo[] = [...initialCompletedArray];
  const [todos, setTodos] = useState<Todo[]>(data);

  const toggleStatus = useCallback((todo: Todo) => {
    setTodos((todos) => {
      const selectedTodo = todos.find((t) => t.id === todo.id);

      if (!selectedTodo) return todos;

      if (!completedListData.includes(selectedTodo)) {
        completedListData.push(selectedTodo);
      } else {
        const index = completedListData.indexOf(selectedTodo);
        if (index > -1) {
          completedListData.splice(index, 1);
        }
      }
      selectedTodo.completed = !selectedTodo.completed;

      return [...todos];
    });
  }, []);

  const deleteTodo = useCallback(
    (todo: Todo) => {
      setTodos((todos) => {
        return todos.filter((t) => t.id !== todo.id);
      });
    },
    [setTodos]
  );

  return {
    todos,
    toggleStatus,
    deleteTodo,
    completedListData
  };
};
