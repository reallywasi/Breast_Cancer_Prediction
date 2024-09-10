import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.models.Todo || mongoose.model('Todo', todoSchema);
