import Todo from '../models/Todo';

export const createTodo = async (todoData) => {
  return await Todo.create(todoData);
};

export const getTodos = async () => {
  return await Todo.find({});
};

export const updateTodo = async (id, updateData) => {
  return await Todo.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id);
};
