import { handleRequest } from '../../../utils/apiHandler';
import dbConnect from '../../../utils/db';
import { createTodo, getTodos } from '../../../services/todoService';

export const GET = handleRequest(async (req, res) => {
  await dbConnect();
  const todos = await getTodos();
  res.status(200).json({ success: true, data: todos });
});

export const POST = handleRequest(async (req, res) => {
  await dbConnect();
  const todo = await createTodo(req.body);
  res.status(201).json({ success: true, data: todo });
});
