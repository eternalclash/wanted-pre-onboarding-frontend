import { setting } from "./setting";

export const createTodo = async (todo) => {
  return setting.post("/todos", { todo});
};

export const getTodos = async () => {
    return setting.get("/todos", );
  };
export const updateTodo = async (id,todo,isCompleted) => {
    return setting.put(`/todos/${id}`, { todo,isCompleted});
  };
export const deleteTodo = async (id) => {
    return setting.delete(`/todos/${id}`,);
  };