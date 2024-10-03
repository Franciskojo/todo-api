import { TodoModel } from "../models/todo.js";

export const addTodo = async (req, res, next) => {
  try {
    // Validate user inputs
    // Write todo to database
    await TodoModel.create(req.body);
    // Response to request
    res.status(201).json("Todo was added!");
  } catch (error) {
    next(error);
  }
};

export const getTodos = async (req, res, next) => {
  try {
    // Fetch todo from database
    const todos = await TodoModel.find();
    // Return response
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const updatedTodo = (req, res, next) => {
  res.json("Todo updated!");
};

export const deleteTodo = (req, res, next) => {
  res.json("Todo deletd!");
};
