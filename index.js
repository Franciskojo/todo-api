import express from "express";
import mongoose from "mongoose";
import todoRouter from "./routes/todo.js";
import userRouter from "./routes/user.js";
import cors from "cors";


// Connect to database
await mongoose.connect(process.env.MONGO_URI);

// create an express app
const app = express();

// Use  middlewares
app.use(express.json());

// Use routes
app.use(cors());
app.use(todoRouter);
app.use(userRouter)

// Listen for incoming requests
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
