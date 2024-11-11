import { Router } from "express";
import { intentarLogin } from "../controllers/login.controllers.js";

const LoginRouter = Router();

LoginRouter.post("/login", intentarLogin);

export default LoginRouter;
