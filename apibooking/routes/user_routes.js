import express from "express";
import UserController from "../controllers/user_controller.js";
const userRouter= express();
userRouter.get("/users",UserController.AllUser);
export default userRouter;
