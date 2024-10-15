import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updatedTodo,
} from "../controllers/todo.js";
import { localUpload, remoteUpload } from "../middleware/upload.js";

// create a router
const todoRouter = Router();

// Define routes
todoRouter.post("/todos", remoteUpload.single("icon"), addTodo);

todoRouter.get("/todos", getTodos);

todoRouter.patch("/todos/:id", updatedTodo);

todoRouter.delete("/todos/:id", deleteTodo);

// Export router
export default todoRouter;
