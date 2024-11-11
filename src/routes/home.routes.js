import { Router } from "express";
import { tenerHome } from "../controllers/home.controllers.js";

const Homerouter = Router();

Homerouter.get("/home", tenerHome)

export default Homerouter();
