import { TodoInstance } from "../entities/todo.entities";

class TodoService {
  create = async (todo: { id: string; title: string; completed: boolean }) => {
    const newTodo = await TodoInstance.create(todo);
    return newTodo;
  };

  readPagination = async (limit: number, offset: number) => {
    const listTodo = await TodoInstance.findAll({ where: {}, limit, offset });
    return listTodo;
  };

  getDetail = async (id: string) => {
    const todo = await TodoInstance.findOne({ where: { id: id } });
    return todo;
  };

  update = async (
    id: string,
    infoUpdate: { title?: string; completed: boolean }
  ) => {
    const todo = await TodoInstance.update(infoUpdate, { where: { id: id } });
    return todo;
  };
}

export default TodoService;
