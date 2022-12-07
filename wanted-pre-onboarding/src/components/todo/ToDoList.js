import { useContext, useEffect } from "react";
import { getTodos } from "../../api/todo";
import { dispatchContext, todoContext } from "../../context/ToDoContext";
import ToDoItem from "./ToDoItem";


const TodoList = () => {
  const todoData = useContext(todoContext);
  const dispatch = useContext(dispatchContext);

  useEffect(() => {
    const getData = () => {
      getTodos()
        .then((res) => {
          dispatch({ type: "INIT", initTodos: res.data });
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    getData();
  }, []);

  return (
    <article >
      {todoData?.map((list) => (
        <ToDoItem key={list.id} list={list} />
      ))}
    </article>
  );
};

export default TodoList;