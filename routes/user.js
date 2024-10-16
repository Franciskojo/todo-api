import { Router } from "express";
import { getProfile, loginUser, logoutUser, registerUser, updateProfile,  } from "../controllers/user.js";
import { userAvatarUpload } from "../middleware/upload.js";

//Create Router 
const userRouter = Router();

// Define routes
userRouter.post("/users/register", registerUser);

userRouter.post("/users/login", loginUser);

userRouter.get("/user/me", getProfile);

userRouter.post("/users/logout", logoutUser);

userRouter.post("/users/me", userAvatarUpload.single("avatar"), updateProfile);


// Export router
export default userRouter;
