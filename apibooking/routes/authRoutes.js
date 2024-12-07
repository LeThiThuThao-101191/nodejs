import express from "express";
import authController from '../controllers/authController.js';  // Đảm bảo có phần mở rộng .js

const authRouter= express();
authRouter.post("/register",authController.register);
authRouter.post("/login",authController.login)
export default authRouter;
