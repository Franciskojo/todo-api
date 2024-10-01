import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updatedTodo,
} from "../controllers/todo.js";

// create a router
const todoRouter = Router();

// Define routes
todoRouter.post("/todos", addTodo);

todoRouter.get("/todos", getTodos);

todoRouter.patch("/todos/:id", updatedTodo);

todoRouter.delete("/todos/:id", deleteTodo);

// Export router
export default todoRouter;
