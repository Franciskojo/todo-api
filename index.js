import express from "express";
import mongoose from "mongoose";
import todoRouter from "./routes/todo.js";
import userRouter from "./routes/user.js";


// Connect to database
await mongoose.connect("mongodb+srv://todo-api:todo-api@mest-web-dev.q2x2p.mongodb.net/todo-db?retryWrites=true&w=majority&appName=Mest-web-dev")
// create an express app
const app = express();

// Use routes
app.use(todoRouter);
app.use(userRouter)

// Listen for incoming requests
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
