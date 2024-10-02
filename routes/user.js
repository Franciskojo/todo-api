import { Router } from "express";
import { login, logout, register } from "../controllers/user.js";

//Create Router 
const userRouter = Router();

// Define routes
userRouter.post("/users/register", register);

userRouter.post("/users/login", login);

userRouter.post("/users/logout", logout);


// Export router
export default userRouter;
