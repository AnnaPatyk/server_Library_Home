import express from "express";
import AuthController from "../controllers/authController.mjs";
import { isAuth } from "../middleware/auth.mjs";

const authRouter = express.Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);
authRouter.get("/get-auth-user", isAuth, AuthController.getAuthUser);
export default authRouter;
